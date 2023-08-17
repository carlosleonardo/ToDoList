
export interface Tarefa {
    id: number;
    nome: string;
    descricao?: string;
    finalizada: boolean;
    dataInicio: Date;
    dataTermino?: Date;
}