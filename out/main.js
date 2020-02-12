class Contenitore {
    constructor(nome, quantita, codice) {
        this.nome = nome;
        this.quantita = quantita;
        this.codice = codice;
    }
    compara(cont1, cont2) {
        var diff;
        if (cont1 instanceof BID && cont2 instanceof BID || cont1 instanceof LAT && cont2 instanceof LAT) {
            if (cont1.getQuantita() > cont2.getQuantita())
                diff = cont1.getQuantita() - cont2.getQuantita();
            else
                diff = cont2.getQuantita() - cont1.getQuantita();
        }
        return diff;
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
                z.splice(i, 1);
                i = -1;
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
/*RIEMPIMENTO CONTENITORI*/
var L1 = new LAT(Codici.getCodice(), "Acqua", 1);
listContenitori.push(L1);
var L3 = new LAT(Codici.getCodice(), "Acqua", 2);
listContenitori.push(L3);
var B1 = new BID(Codici.getCodice(), "Olio", 5);
listContenitori.push(B1);
var B3 = new BID(Codici.getCodice(), "Olio", 6);
listContenitori.push(B3);
var L2 = new LAT(Codici.getCodice(), "Vino", 2);
listContenitori.push(L2);
var B2 = new BID(Codici.getCodice(), "Aceto", 4);
listContenitori.push(B2);
/*FILTRAGGIO */
listContenitori = Utilita.filtraggio(listContenitori, L3);
listContenitori = Utilita.filtraggio(listContenitori, B3);
/*COMPARA*/
console.log("Differenza=" + listContenitori[0].compara(B2, B1)); //B2= 4 B1= 5
/*STAMPA*/
for (let i = 0; i < listContenitori.length; i++) {
    console.log(listContenitori[i].getNome() + "-" + listContenitori[i].getQuantita() + "-" + listContenitori[i].getCodice());
}
//# sourceMappingURL=main.js.map