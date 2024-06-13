import { TestBed } from '@angular/core/testing';

import { FiltroService } from './filtro.service';
import { Tarefa, TipoPrioridade } from './tarefa';

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
                prioridade: TipoPrioridade.Media,
            },
            {
                id: 2,
                nome: 'Tarefa 2',
                descricao: 'Tarefa 2',
                finalizada: true,
                dataInicio: new Date(),
                dataTermino: new Date(),
                prioridade: TipoPrioridade.Baixa,
            },
        ];
        service.adicionarFiltro({
            nome: 'filtro-teste',
            valor: 'Tarefa de teste',
            funcaoFiltro: (tarefa: Tarefa) => tarefa.finalizada === false,
        });

        expect(service.obterTarefasFiltradas(tarefas).length).toEqual(1);
    });

    it('Removendo um filtro', () => {
        service.adicionarFiltro({
            nome: 'filtro1',
            valor: '',
            funcaoFiltro: (tarefa: Tarefa) => !tarefa.finalizada,
        });

        service.removerFiltro('filtro1');
        expect(service.obterFiltros().length).toEqual(0);
    });

    it('Evitando filtro duplicado', () => {
        service.adicionarFiltro({
            nome: 'filtro1',
            valor: '',
            funcaoFiltro: (tarefa: Tarefa) => !tarefa.finalizada,
        });
        service.adicionarFiltro({
            nome: 'filtro1',
            valor: '',
            funcaoFiltro: (tarefa: Tarefa) => !tarefa.finalizada,
        });
        expect(service.obterFiltros().length).toEqual(1);
    });

    it('Adicionando um filtro', () => {
        service.adicionarFiltro({
            nome: 'filtro1',
            valor: '',
            funcaoFiltro: (tarefa: Tarefa) => !tarefa.finalizada,
        });

        expect(service.obterFiltros().length).toEqual(1);
    });
});
