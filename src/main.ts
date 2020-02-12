abstract class Contenitore {
    protected nome: string;
    protected quantita: number;
    protected codide:string;
    constructor(nome: string, quantita: number, codice:string) {
        this.nome = nome;
        this.quantita = quantita;
    }
}