import { Tarefa } from './tarefa';

export interface IFiltro {
    nome: string;
    valor: any;
    funcaoFiltro: (tarefa: Tarefa) => boolean;
}
