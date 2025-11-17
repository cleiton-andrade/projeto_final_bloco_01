import { Produto } from "../model/Produto";
import { IProdutoRepository } from "../repository/IProdutoRepository";

export class ProdutoController implements IProdutoRepository{

    private listaProduto : Array <Produto> = new Array<Produto> ()

    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscarProduto = this.buscarNoArray(numero)
        if (buscarProduto != null){
            buscarProduto.visualizar()
        }else{
            console.log(numero + " Não encontrado.")
        }
    }

    listarTodas(): void {
        for(let Produto of this.listaProduto){
            Produto.visualizar()
        }
    }

    cadastrar(Produto: Produto): void {
        this.listaProduto.push(Produto)
        console.log(Produto.numero + "° Produto cadastrado com sucesso!")
    }

    deletar(numero: number): void {
        let buscarProduto = this.buscarNoArray(numero)
        if (buscarProduto != null){
            this.listaProduto.splice(this.listaProduto.indexOf(buscarProduto), 1)
            console.log(numero + " Deletado com sucesso! ")
        }else{
            console.log(numero + " Não encontrado.")
        }
    }

    public gerarNumero(): number{
        return ++ this.numero
    }

    public buscarNoArray(numero: number) : Produto | null{
        for(let Produto of this.listaProduto){
            if (Produto.numero===numero){
                return Produto
            }
        }
        return null
    }

}