export abstract class Produto {

    private _numero: number;
    private _marca: string;
    private _valor: number;
    private _tamanho: number;

    constructor(numero: number, marca: string, valor: number, tamanho: number) {
        this._numero = numero;
        this._tamanho = tamanho;
        this._marca = marca;
        this._valor = valor;
    }

    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get marca() {
        return this._marca;
    }

    public set marca(marca: string) {
        this._marca = marca;
    }

    public get valor() {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    public get tamanho() {
        return this._tamanho;
    }

    public set tamanho(tamanho: number) {
        this._tamanho = tamanho;
    }

    public visualizar(): void {


        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Numero do Produto: " + this._numero);
        console.log("marca: " + this._marca);
        console.log("tamanho do produto: " + this._tamanho);
        console.log("valor: " + this._valor.toFixed(2));

    }

}