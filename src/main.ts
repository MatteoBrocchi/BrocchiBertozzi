abstract class Contenitore {
    protected nome: string;
    protected quantita: number;
    protected codide: string;
    constructor(nome: string, quantita: number, codice: string) {
        this.nome = nome;
        this.quantita = quantita;
    }
}
class LAT extends Contenitore {
    constructor(codice: string, nome: string, quantita: number) {
        super(nome, quantita, codice)
    }
}

class BID extends Contenitore {
    constructor(codice: string, nome: string, quantita: number) {
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

var L1: Contenitore = new LAT("", "Acqua", 1);
var B1: Contenitore = new BID("", "Olio", 5);
var L2: Contenitore = new LAT("", "Vino", 2);
var B2: Contenitore = new BID("", "Aceto", 4);