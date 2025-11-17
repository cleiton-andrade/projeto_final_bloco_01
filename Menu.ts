import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/Controller/ProdutoController";
import { Calcados } from "./src/model/Calcados";

export function main() {

    let produtos: ProdutoController = new ProdutoController()

    let opcao, numero, tipo, valor, tamanho: number
    let marca: string
    const tiposCalcados = ['sapato', 'tenis']

    while (true) {

        console.log("_____________________________________________________");
        console.log("                                                     ");
        console.log("                   E-COMMERCE                        ");
        console.log("_____________________________________________________");
        console.log("                                                     ");
        console.log("            1 - Cadastrar produto                    ");
        console.log("            2 - Procurar produto                     ");
        console.log("            3 - Excluir produto                      ");
        console.log("            4 - Listar todos os Produtos             ");
        console.log("            5 - Sair                                 ");
        console.log("_____________________________________________________");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log("\nDesenvolvido por CA, todos os direitos reservados ©");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");
                                
                console.log("Digite o nome da marca do produto: ");
                marca = readlinesync.question();

                console.log("Digite o tipo do calçado: ");
                tipo = readlinesync.keyInSelect(tiposCalcados, '', { cancel: false }) + 1;

                console.log("Digite o tamanho do calçado: ");
                tamanho = readlinesync.questionInt();

                console.log("Digite o valor do produto (R$): ");
                valor = readlinesync.questionFloat();

            produtos.cadastrar(
                new Calcados(produtos.gerarNumero(), marca, valor , tamanho, tipo)
                );

            keyPress();
            break;
            
            case 2:
                console.log("\n\nProcurar produto\n\n");
                console.log("Digite o numero do produto: ")
                numero = readlinesync.questionInt()
                produtos.procurarPorNumero(numero)
                
                keyPress()
                break;

            case 3:
                
                console.log("\n\nExcluir produto\n\n");

                console.log("Digite o numero do produto: ")
                numero = readlinesync.questionInt()
                produtos.deletar(numero)
                
                keyPress()
                break;

            case 4:
                console.log("\n\nListar todos os Produtos\n\n");


                produtos.listarTodas()
                
                keyPress()
                break;

            default:
                console.log("\nOpção Inválida!\n");
                
                keyPress()
                break;
        }
    }

}

export function sobre(): void {
    console.log("_____________________________________________________");
}
main();

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
  }