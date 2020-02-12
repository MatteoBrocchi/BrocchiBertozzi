
export default class Contenitore implements ICMP{
    protected nome: string;
    protected quantita: number;
    protected codice: number;
    constructor(nome: string, quantita: number, codice: number) {
        this.nome = nome;
        this.quantita = quantita;
        this.codice = codice;
    }
    public  compara(cont1:Contenitore, cont2:Contenitore)
    {
        var diff:number;
        if( cont1 instanceof BID && cont2 instanceof BID ||cont1 instanceof LAT && cont2 instanceof LAT){
            if(cont1.getQuantita()>cont2.getQuantita())diff=cont1.getQuantita()-cont2.getQuantita()
            else diff=cont2.getQuantita()-cont1.getQuantita()
        }
        return diff;
    }
    public getCodice(): number { return this.codice; }
    public getNome(): string { return this.nome; }
    public getQuantita(): number { return this.quantita; }
}
import ICMP from"./interfaccia";
import LAT from "./lattine";
import BID from "./bidoni";