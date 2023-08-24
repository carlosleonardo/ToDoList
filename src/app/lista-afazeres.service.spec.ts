import { TestBed } from '@angular/core/testing';

import { ListaAfazeresService } from './lista-afazeres.service';
import { Tarefa } from './tarefa';

describe('ListaAfazeresService', () => {
  let service: ListaAfazeresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAfazeresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Tarefa adicionada'), () => {
    let tarefa: Tarefa = {
      id: 1, nome: 'Blazor', descricao: 'Uma descrição', dataInicio: new Date(),
      finalizada: false
    }
    
  }
});
