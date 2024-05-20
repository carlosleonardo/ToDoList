import { TestBed } from '@angular/core/testing';

import { ListaAfazeresService } from './lista-afazeres.service';
import { Tarefa } from './tarefa';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BDNaMemoriaService } from './bdna-memoria.service';

describe('ListaAfazeresService', () => {
    let service: ListaAfazeresService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                InMemoryWebApiModule.forRoot(BDNaMemoriaService),
            ],
            providers: [ListaAfazeresService],
        });

        //httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(ListaAfazeresService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Tarefa adicionada', () => {
        let tarefa: Tarefa = {
            id: 1,
            nome: 'Blazor',
            descricao: 'Uma descrição',
            dataInicio: new Date(),
            finalizada: false,
        };

        let minhasTarefas: Tarefa[] = [];
        service.adicionarTarefa(tarefa).subscribe((tarefa) => {
            service
                .obterTarefas()
                .subscribe((tarefas) => (minhasTarefas = tarefas));
        });

        //expect(minhasTarefas).toBeTruthy();
    });

    it('Obter tarefas ', () => {
        let tarefa: Tarefa = {
            id: 1,
            nome: 'Angular',
            descricao: 'Uma descrição',
            dataInicio: new Date(),
            finalizada: false,
            dataTermino: new Date(),
        };
        service.adicionarTarefa(tarefa);
        tarefa = {
            id: 2,
            nome: 'Blazor',
            descricao: 'Descrição',
            dataInicio: new Date(),
            finalizada: true,
            dataTermino: new Date(),
        };
        service.adicionarTarefa(tarefa);

        let minhasTarefas: Tarefa[] = [];
        let tarefas$ = service.obterTarefas();
        tarefas$.subscribe((tarefas) => {
            minhasTarefas = tarefas;
        });
        //expect(minhasTarefas).toBeTruthy();
    });
});
