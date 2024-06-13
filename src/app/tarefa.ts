export enum TipoPrioridade {
    Alta = 'Alta',
    Media = 'Média',
    Baixa = 'Baixa',
    Nenhuma = 'Nenhuma',
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
