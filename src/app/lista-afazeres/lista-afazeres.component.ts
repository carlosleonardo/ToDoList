import { Component, OnInit } from '@angular/core';
import { ListaAfazeresService } from '../lista-afazeres.service';
import { Tarefa } from '../tarefa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarTarefaComponent } from '../adicionar-tarefa/adicionar-tarefa.component';

@Component({
  selector: 'app-lista-afazeres',
  templateUrl: './lista-afazeres.component.html',
  styleUrls: ['./lista-afazeres.component.css']
})
export class ListaAfazeresComponent implements OnInit {

  tarefas!: Tarefa[];


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

  excluir(): void {
    confirm("Tem certeza de que quer excluir a tarefa?");
  }

  abrirDialogo() {
    const mod = this.modal.open(AdicionarTarefaComponent, { centered: true, backdrop: 'static' });

  }

  adicionarTarefa(tarefa: Tarefa): void {
    this.servico.adicionarTarefa(tarefa).subscribe( tarefa => this.tarefas.push(tarefa));
  }
}
