import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListaAfazeresService } from '../lista-afazeres.service';
import { Tarefa, TipoPrioridade } from '../tarefa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarTarefaComponent } from '../adicionar-tarefa/adicionar-tarefa.component';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from '../buscador/buscador.component';
import { FiltroService } from '../filtro.service';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
    selector: 'app-lista-afazeres',
    templateUrl: './lista-afazeres.component.html',
    styleUrls: ['./lista-afazeres.component.css'],
    standalone: true,
    imports: [FormsModule, DatePipe, BuscadorComponent, AsyncPipe],
})
export class ListaAfazeresComponent implements OnInit {
    tarefas: Tarefa[] = [];
    tarefasFiltradas: Tarefa[] = [];
    tarefasFiltradasSub = new BehaviorSubject<Tarefa[]>([]);
    tarefasFiltradas$ = this.tarefasFiltradasSub.asObservable();
    ocultarFinalizadas: boolean = true;

    ngOnInit(): void {
        this.obterTarefas();
    }

    obterNomePrioridade(prioridade: TipoPrioridade): string {
        const mapeamento = {
            [TipoPrioridade.Alta]: 'Alta',
            [TipoPrioridade.Media]: 'Média',
            [TipoPrioridade.Baixa]: 'Baixa',
            [TipoPrioridade.Nenhuma]: 'Nenhuma',
        };
        return mapeamento[prioridade];
    }

    /**
     *  Inicializa a lista de tarefas, injetando um serviço usando DI
     */
    constructor(
        private servico: ListaAfazeresService,
        private modal: NgbModal,
        private filtroService: FiltroService
    ) {}

    obterTarefas(): void {
        this.servico.obterTarefas().subscribe((tarefas: Tarefa[]) => {
            this.tarefas = tarefas.sort(
                (tarefa1, tarefa2) => tarefa1.prioridade - tarefa2.prioridade
            );
            this.tarefasFiltradas = this.filtroService.obterTarefasFiltradas(
                this.tarefas
            );

            this.tarefasFiltradasSub.next(this.tarefasFiltradas);
            console.log(
                `${
                    this.tarefas.length - this.tarefasFiltradas.length
                } Tarefas filtrada`
            );
        });
    }

    excluir(id: number): void {
        if (confirm('Tem certeza de que quer excluir a tarefa?')) {
            this.servico.excluirTarefa(id).subscribe(() => {
                this.alternarFinalizadas();
            });
        }
    }

    alterarTarefa(id: number) {
        this.servico.obterTarefa(id).subscribe((tarefa: Tarefa) => {
            const modRef = this.modal.open(AdicionarTarefaComponent, {
                centered: true,
                backdrop: 'static',
            });
            modRef.componentInstance.tarefa = tarefa;
            modRef.componentInstance.editando = true;
            modRef.result.then((resultado: Tarefa) => {
                if (resultado) {
                    //console.log(resultado);
                    this.servico
                        .alterarTarefa(resultado as Tarefa)
                        .subscribe(() => {
                            this.alternarFinalizadas();
                        });
                }
            });
        });
    }

    abrirDialogo() {
        const mod = this.modal.open(AdicionarTarefaComponent, {
            centered: true,
            backdrop: 'static',
        });
        mod.result.then((resultado: Tarefa) => {
            if (resultado) {
                console.log(resultado);
                this.adicionarTarefa(resultado as Tarefa);
            }
        });
    }

    finalizarTarefa(id: number): void {
        if (confirm('Certo de que quer finalizar a tarefa?')) {
            this.servico
                .obterTarefa(id)
                .pipe(
                    switchMap((tarefa) => this.servico.finalizarTarefa(tarefa))
                )
                .subscribe(() => {
                    this.alternarFinalizadas();
                });
        }
    }
    adicionarTarefa(tarefa: Tarefa): void {
        this.servico.adicionarTarefa(tarefa).subscribe((tarefa: Tarefa) => {
            this.tarefas.push(tarefa);
            this.alternarFinalizadas();
        });
    }

    alternarFinalizadas(): void {
        if (this.ocultarFinalizadas) {
            this.filtroService.adicionarFiltro({
                nome: 'ocultar-finalizadas',
                valor: this.ocultarFinalizadas,
                funcaoFiltro: (tarefa: Tarefa) => {
                    console.log('Filtradas as finalizadas');
                    if (tarefa.finalizada)
                        console.log(`Filtrada tarefa ${tarefa.nome}`);
                    return tarefa.finalizada === false;
                },
            });
        } else {
            this.filtroService.removerFiltro('ocultar-finalizadas');
        }
        this.obterTarefas();
    }
}
