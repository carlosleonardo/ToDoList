import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaAfazeresService } from '../lista-afazeres.service';
import { Tarefa } from '../tarefa';
import { TarefaDetalheComponent } from '../tarefa-detalhe/tarefa-detalhe.component';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.css']
})
export class AdicionarTarefaComponent implements OnInit {
  submetido: boolean = false;
  ngOnInit(): void {
    
  }
  tarefa : Tarefa = {} as Tarefa;

  constructor(private servico: ListaAfazeresService, private modal: NgbActiveModal) {
  }
  
  fecharDialogo(): void {
    this.modal.dismiss('Cancelado');
  }

  confirmar() {
    this.submetido = true;
    alert(this.tarefa.nome)
    this.modal.close();
  }
 
}
