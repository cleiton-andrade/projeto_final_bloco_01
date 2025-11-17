import { Produto } from "./Produto";

export class Calcados extends Produto{

    private _tipo: number;

    constructor(numero: number, marca: string, valor:number, tamanho:number, tipo: number){
        super(numero, marca, valor, tamanho) 
        this._tipo = tipo
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Tenis";
                break;
            case 2:
                tipo = "Sapato";
                break;
        }
        
        super.visualizar()
        console.log("Tipo do produto: " + tipo);        
    }

}
