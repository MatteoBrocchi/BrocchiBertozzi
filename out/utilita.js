"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Utilita;
//# sourceMappingURL=utilita.js.map