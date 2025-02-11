import { Component, Input, OnInit, inject, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaAfazeresService } from '../lista-afazeres.service';
import { Tarefa, TipoPrioridade } from '../tarefa';
import { TarefaDetalheComponent } from '../tarefa-detalhe/tarefa-detalhe.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-adicionar-tarefa',
    templateUrl: './adicionar-tarefa.component.html',
    styleUrls: ['./adicionar-tarefa.component.css'],
    imports: [FormsModule]
})
export class AdicionarTarefaComponent implements OnInit {
    private servico = inject(ListaAfazeresService);
    private modal = inject(NgbActiveModal);

    nomesEnumeracaoTipoPrioridade = [
        { valor: TipoPrioridade.Alta, nome: 'Alta' },
        { valor: TipoPrioridade.Media, nome: 'Média' },
        { valor: TipoPrioridade.Baixa, nome: 'Baixa' },
        { valor: TipoPrioridade.Nenhuma, nome: 'Nenhuma' },
    ];

    ngOnInit(): void {
        console.log(this.tarefa);
    }
    @Input() tarefa: Tarefa = {} as Tarefa;
    readonly editando = input<boolean>(false);

    fecharDialogo(): void {
        this.modal.dismiss('Cancelado');
    }

    confirmar() {
        this.modal.close(this.tarefa);
    }
}
