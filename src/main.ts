abstract class Contenitore {
    protected nome: string;
    protected quantita: number;
    protected codide: number;
    constructor(nome: string, quantita: number, codice: number) {
        this.nome = nome;
        this.quantita = quantita;
    }
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
    public filtraggio(z: Contenitore[], contenitore: Contenitore): Contenitore {
        return
    }
}

interface CMP {
    compara()
}

var codici: number[] = new Array();
class Codici {
    static getCodice(): number {
        if (codici.length!=0)
        {
            do
            {
                var trovato: boolean = false;
                var random: number = Math.floor(Math.random() * 5999999);
                for (let i: number = 0; i < codici.length; i++)
                {
                    if (codici[i] != random) trovato = true;  /*inverto valore solo se trovo diverso*/
                }
            } while (!trovato)
        }
        else
        var random: number = Math.floor(Math.random() * 5999999);
        codici.push(random);
        console.log(random);

        return random;
    }
}

var L1: Contenitore = new LAT(Codici.getCodice(), "Acqua", 1);
var B1: Contenitore = new BID(Codici.getCodice(), "Olio", 5);
var L2: Contenitore = new LAT(Codici.getCodice(), "Vino", 2);
var B2: Contenitore = new BID(Codici.getCodice(), "Aceto", 4);