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
//# sourceMappingURL=main.js.map