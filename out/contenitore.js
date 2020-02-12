"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contenitore {
    constructor(nome, quantita, codice) {
        this.nome = nome;
        this.quantita = quantita;
        this.codice = codice;
    }
    compara(cont1, cont2) {
        var diff;
        if (cont1 instanceof bidoni_1.default && cont2 instanceof bidoni_1.default || cont1 instanceof lattine_1.default && cont2 instanceof lattine_1.default) {
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
exports.default = Contenitore;
const lattine_1 = require("./lattine");
const bidoni_1 = require("./bidoni");
//# sourceMappingURL=contenitore.js.map