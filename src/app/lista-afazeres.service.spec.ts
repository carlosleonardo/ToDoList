import { TestBed } from '@angular/core/testing';

import { ListaAfazeresService } from './lista-afazeres.service';
import { Tarefa, TipoPrioridade } from './tarefa';
import {
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import {
    HttpTestingController,
    provideHttpClientTesting,
} from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListaAfazeresService', () => {
    let service: ListaAfazeresService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                ListaAfazeresService,
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
            ],
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
            prioridade: TipoPrioridade.Baixa,
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
            prioridade: TipoPrioridade.Alta,
        };
        service.adicionarTarefa(tarefa);
        tarefa = {
            id: 2,
            nome: 'Blazor',
            descricao: 'Descrição',
            dataInicio: new Date(),
            finalizada: true,
            dataTermino: new Date(),
            prioridade: TipoPrioridade.Media,
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
