export enum TipoPrioridade {
    Alta = 0,
    Media = 1,
    Baixa = 2,
    Nenhuma = 3,
}

export interface Tarefa {
    id: number;
    nome: string;
    descricao?: string;
    finalizada: boolean;
    dataInicio: Date;
    dataTermino?: Date;
    prioridade: TipoPrioridade;
}
