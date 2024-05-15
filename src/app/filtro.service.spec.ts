import { TestBed } from '@angular/core/testing';

import { FiltroService } from './filtro.service';
import { Tarefa } from './tarefa';

describe('FiltroService', () => {
    let service: FiltroService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FiltroService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Listar tarefas finalizadas', () => {
        let tarefas: Tarefa[] = [
            {
                id: 1,
                nome: 'Tarefa de teste',
                descricao: 'Uma tarefa',
                finalizada: false,
                dataInicio: new Date(),
            },
            {
                id: 2,
                nome: 'Tarefa 2',
                descricao: 'Tarefa 2',
                finalizada: true,
                dataInicio: new Date(),
                dataTermino: new Date(),
            },
        ];
        service.adicionarFiltro({
            nome: 'filtro-teste',
            valor: 'Tarefa de teste',
            funcaoFiltro: (tarefa: Tarefa) => tarefa.finalizada === false,
        });

        expect(service.obterTarefasFiltradas(tarefas).length).toEqual(1);
    });
});
