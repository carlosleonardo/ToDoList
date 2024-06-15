export enum TipoPrioridade {
    Alta = 1,
    Media = 2,
    Baixa = 3,
    Nenhuma = 4,
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
