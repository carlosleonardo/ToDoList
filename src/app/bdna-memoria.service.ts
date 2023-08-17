import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class BDNaMemoriaService implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    const tarefas: Tarefa[] = [
      { id: 1, nome: 'Curso Angular', descricao : 'Um curso de Angular', finalizada: false, 
      dataInicio: new Date(), dataTermino: new Date('')},
      { id: 2, nome: 'Curso Blazor', descricao : 'Um curso de blazor', finalizada: false, 
        dataInicio: new Date(), dataTermino: new Date('')}
    ];
    return {tarefas};
  }

  genId(tarefas: Tarefa[]) : number {
    return tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id))+1: 1;
  }
}
