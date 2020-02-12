class Contenitore {
    constructor(nome, quantita, codice) {
        this.nome = nome;
        this.quantita = quantita;
        this.codice = codice;
    }
    getCodice() { return this.codice; }
    getNome() { return this.nome; }
    getQuantita() { return this.quantita; }
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
    static filtraggio(z, contenitore) {
        for (let i = 0; i < z.length; i++) {
            if (z[i].getNome() == contenitore.getNome()) {
                for (let k = i; k < z.length - 1; k++) {
                    z[k] = z[k + 1];
                }
            }
        }
        return z;
    }
}
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
        return random;
    }
}
var codici = new Array(); /*lita con tutti i codici gia usciti*/
var listContenitori = new Array(); /*lista con tutti i contenitori*/
var L1 = new LAT(Codici.getCodice(), "Acqua", 1);
listContenitori.push(L1);
var L3 = new LAT(Codici.getCodice(), "Acqua", 2);
listContenitori.push(L3);
var B1 = new BID(Codici.getCodice(), "Olio", 5);
listContenitori.push(B1);
var L2 = new LAT(Codici.getCodice(), "Vino", 2);
listContenitori.push(L2);
var B2 = new BID(Codici.getCodice(), "Aceto", 4);
listContenitori.push(B2);
listContenitori = Utilita.filtraggio(listContenitori, L3);
for (let i = 0; i < listContenitori.length; i++) {
    console.log(listContenitori[i].getNome() + "-" + listContenitori[i].getQuantita() + "-" + listContenitori[i].getCodice());
}
//# sourceMappingURL=main.js.map