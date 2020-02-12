abstract class Contenitore {
    protected nome: string;
    protected quantita: number;
    protected codide:string;
    constructor(nome: string, quantita: number, codice:string) {
        this.nome = nome;
        this.quantita = quantita;
    }
}
class LAT extends Contenitore{
    constructor(codice:string,nome:string,quantita:number){
        super(nome,quantita,codice)
    }
}

class BID extends Contenitore{
    constructor(codice:string,nome:string,quantita:number){
        super(nome,quantita,codice)
    }
}

interface CMP{
    compara()
}