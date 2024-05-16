import { Injectable } from '@angular/core';
import { IFiltro } from './filtro';
import { Tarefa } from './tarefa';

@Injectable({
    providedIn: 'root',
})
export class FiltroService {
    private filtros: IFiltro[] = [];
    constructor() {}

    adicionarFiltro(tipoFiltro: IFiltro) {
        if (this.filtros.indexOf(tipoFiltro) === -1)
            this.filtros.push(tipoFiltro);
    }

    removerFiltro(nome: string) {
        this.filtros = this.filtros.filter(
            (filtro) => filtro.nome.toLowerCase() !== nome.toLowerCase()
        );
    }

    obterTarefasFiltradas(tarefas: Tarefa[]): Tarefa[] {
        return tarefas?.filter((tarefa) => {
            return this.filtros.every((filtro) => filtro.funcaoFiltro(tarefa));
        });
    }
}
