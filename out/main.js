class Contenitore {
    constructor(nome, quantita, codice) {
        this.nome = nome;
        this.quantita = quantita;
    }
}
class LAT extends Contenitore {
    constructor(codice, nome, quantita) {
        super(nome, quantita, codice);
    }
}
class BID extends Contenitore {
    constructor(codice, nome, quantita) {
        super(nome, quantita, codice);
    }
}
class Utilita {
    filtraggio(z, contenitore) {
        return;
    }
}
var codici = new Array();
class Codici {
    static getCodice() {
        if (codici.length != 0) {
            do {
                var trovato = false;
                var random = Math.floor(Math.random() * 5999999);
                for (let i = 0; i < codici.length; i++) {
                    if (codici[i] != random)
                        trovato = true; /*inverto valore solo se trovo diverso*/
                }
            } while (!trovato);
        }
        else
            var random = Math.floor(Math.random() * 5999999);
        codici.push(random);
        console.log(random);
        return random;
    }
}
var L1 = new LAT(Codici.getCodice(), "Acqua", 1);
var B1 = new BID(Codici.getCodice(), "Olio", 5);
var L2 = new LAT(Codici.getCodice(), "Vino", 2);
var B2 = new BID(Codici.getCodice(), "Aceto", 4);
//# sourceMappingURL=main.js.map