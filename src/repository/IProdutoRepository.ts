import { Produto } from "../model/Produto";

export interface IProdutoRepository {

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(Produto:Produto): void;
    atualizar(Produto:Produto): void;
    deletar(numero: number): void;
}