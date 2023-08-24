import { Component, OnInit } from '@angular/core';
import { ListaAfazeresService } from '../lista-afazeres.service';
import { Tarefa } from '../tarefa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarTarefaComponent } from '../adicionar-tarefa/adicionar-tarefa.component';
import { Serializer } from '@angular/compiler';

@Component({
  selector: 'app-lista-afazeres',
  templateUrl: './lista-afazeres.component.html',
  styleUrls: ['./lista-afazeres.component.css']
})
export class ListaAfazeresComponent implements OnInit {

  tarefas!: Tarefa[];
  tarefaFinalizada: boolean = false;

  ngOnInit(): void {
    this.obterTarefas();
  }

  /**
   *  Inicializa a lista de tarefas, injetando um serviço usando DI
   */
  constructor(private servico: ListaAfazeresService, private modal : NgbModal) {
  }

  obterTarefas(): void {
    this.servico.obterTarefas().subscribe( tarefas => this.tarefas = tarefas);
  }

  excluir(id: number): void {
    if (confirm("Tem certeza de que quer excluir a tarefa?")) {
      this.servico.excluirTarefa(id).subscribe(()=> {
        this.obterTarefas();
      });
    }
  }

  alterarTarefa(id: number)
  {
    let modRef = this.modal.open(AdicionarTarefaComponent, { centered: true, backdrop: 'static'});
    this.servico.obterTarefa(id).subscribe( tarefa => {
      modRef.componentInstance.tarefa = tarefa;
      modRef.componentInstance.editando = true;
      modRef.result.then( resultado => {
        if(resultado) {
          console.log(resultado);
          this.servico.alterarTarefa(resultado as Tarefa).subscribe( () => {
            this.obterTarefas();
          });
        }
      })
    })
  }

  abrirDialogo() {
    const mod = this.modal.open(AdicionarTarefaComponent, { centered: true, backdrop: 'static' });
    mod.result.then( resultado => {
      if(resultado) {
        console.log(resultado)
        this.adicionarTarefa(resultado as Tarefa);
      }
    });
  }

  finalizarTarefa(id: number): void {
    this.servico.obterTarefa(id).subscribe( tarefa => {
      this.servico.finalizarTarefa(tarefa).subscribe( tarefa => {
        this.obterTarefas();
      })
    });
  }
  adicionarTarefa(tarefa: Tarefa): void {
    this.servico.adicionarTarefa(tarefa).subscribe( tarefa => this.tarefas.push(tarefa));
  }
}
