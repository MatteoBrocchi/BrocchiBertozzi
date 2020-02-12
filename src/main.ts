class Contenitore implements CMP{
    protected nome: string;
    protected quantita: number;
    protected codice: number;
    constructor(nome: string, quantita: number, codice: number) {
        this.nome = nome;
        this.quantita = quantita;
        this.codice = codice;
    }
    public compara(cont1:Contenitore, cont2:Contenitore)
    {
        var diff:number;
        if(instanceof cont1=="BID")var c:string= "giusto";
        return diff;
    }
    public getCodice(): number { return this.codice; }
    public getNome(): string { return this.nome; }
    public getQuantita(): number { return this.quantita; }
}
class LAT extends Contenitore {
    constructor(codice: number, nome: string, quantita: number) {
        super(nome, quantita, codice)
    }
}
class BID extends Contenitore {
    constructor(codice: number, nome: string, quantita: number) {
        super(nome, quantita, codice)
    }
}
class Utilita {
    static filtraggio(z: Contenitore[], contenitore: Contenitore): Contenitore[] {
        for (let i: number = 0; i < z.length; i++) {
            if (z[i].getNome() == contenitore.getNome()) {
                z.splice(i, 1);
                i=-1;
            }
        }
        return z;
    }
}
interface CMP {

    compara(cont1:Contenitore,cont2:Contenitore):number;
}
class Codici {
    static getCodice(): number {
        if (codici.length != 0) {
            do {
                var trovato: boolean = false;
                var random: number = Math.floor(Math.random() * 5999999);
                for (let i: number = 0; i < codici.length; i++) {
                    if (codici[i] != random) trovato = true;  /*inverto valore solo se trovo diverso*/
                }
            } while (!trovato)
        }
        else
            var random: number = Math.floor(Math.random() * 5999999);
        codici.push(random);
        return random;
    }
}
var codici: number[] = new Array();                /*lita con tutti i codici gia usciti*/
var listContenitori: Contenitore[] = new Array();   /*lista con tutti i contenitori*/
/*RIEMPIMENTO CONTENITORI*/
var L1: Contenitore = new LAT(Codici.getCodice(), "Acqua", 1);
listContenitori.push(L1);
var L3: Contenitore = new LAT(Codici.getCodice(), "Acqua", 2);
listContenitori.push(L3);
var B1: Contenitore = new BID(Codici.getCodice(), "Olio", 5);
listContenitori.push(B1);
var B3: Contenitore = new BID(Codici.getCodice(), "Olio", 6);
listContenitori.push(B3);
var L2: Contenitore = new LAT(Codici.getCodice(), "Vino", 2);
listContenitori.push(L2);
var B2: Contenitore = new BID(Codici.getCodice(), "Aceto", 4);
listContenitori.push(B2);
/*FILTRAGGIO */
listContenitori = Utilita.filtraggio(listContenitori, L3);
listContenitori = Utilita.filtraggio(listContenitori, B3);
/*COMPARA*/
B1.compara(B1,B2);
/*STAMPA*/
for (let i: number = 0; i < listContenitori.length; i++) {
    console.log(listContenitori[i].getNome() + "-" + listContenitori[i].getQuantita() + "-" + listContenitori[i].getCodice());
}

