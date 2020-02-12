"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var codici = new Array(); /*lita con tutti i codici gia usciti*/
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
exports.default = Codici;
//# sourceMappingURL=codici.js.map