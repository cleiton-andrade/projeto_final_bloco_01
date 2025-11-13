import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("_____________________________________________________");
        console.log("                                                     ");
        console.log("                   E-COMMERCE                        ");
        console.log("_____________________________________________________");
        console.log("                                                     ");
        console.log("            1 - Cadastrar produto                    ");
        console.log("            2 - Procurar produto                     ");
        console.log("            3 - Atualizar produto                    ");
        console.log("            4 - Excluir produto                      ");
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
                console.log("\n\nCadastrar produto\n\n");

                break;
            case 2:
                console.log("\n\nProcurar produto\n\n");

                break;
            case 3:
                console.log("\n\nAtualizar produto\n\n");

                break;
            case 4:
                console.log("\n\nExcluir produto\n\n");

                break;
            case 5:
                console.log("\n\nSair\n\n");

                break;

            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log("_____________________________________________________");
}
main();