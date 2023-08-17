import { TestBed } from '@angular/core/testing';

import { ListaAfazeresService } from './lista-afazeres.service';

describe('ListaAfazeresService', () => {
  let service: ListaAfazeresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAfazeresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
