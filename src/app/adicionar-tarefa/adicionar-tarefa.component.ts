import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaAfazeresService } from '../lista-afazeres.service';
import { Tarefa } from '../tarefa';
import { TarefaDetalheComponent } from '../tarefa-detalhe/tarefa-detalhe.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-adicionar-tarefa',
    templateUrl: './adicionar-tarefa.component.html',
    styleUrls: ['./adicionar-tarefa.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class AdicionarTarefaComponent implements OnInit {
  
  ngOnInit(): void {
    console.log(this.tarefa);
  }
  @Input() tarefa : Tarefa = {} as Tarefa;
  @Input() editando: boolean = false;

  constructor(private servico: ListaAfazeresService, private modal: NgbActiveModal) {
  }
  
  fecharDialogo(): void {
    this.modal.dismiss('Cancelado');
  }

  confirmar() {
    this.modal.close(this.tarefa);
  }
 
}
