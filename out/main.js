"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilita_1 = require("./utilita");
const lattine_1 = require("./lattine");
const bidoni_1 = require("./bidoni");
const codici_1 = require("./codici");
var listContenitori = new Array(); /*lista con tutti i contenitori*/
/*RIEMPIMENTO CONTENITORI*/
var L1 = new lattine_1.default(codici_1.default.getCodice(), "Acqua", 1);
listContenitori.push(L1);
var L3 = new lattine_1.default(codici_1.default.getCodice(), "Acqua", 2);
listContenitori.push(L3);
var B1 = new bidoni_1.default(codici_1.default.getCodice(), "Olio", 5);
listContenitori.push(B1);
var B3 = new bidoni_1.default(codici_1.default.getCodice(), "Olio", 6);
listContenitori.push(B3);
var L2 = new lattine_1.default(codici_1.default.getCodice(), "Vino", 2);
listContenitori.push(L2);
var B2 = new bidoni_1.default(codici_1.default.getCodice(), "Aceto", 4);
listContenitori.push(B2);
/*FILTRAGGIO */
listContenitori = utilita_1.default.filtraggio(listContenitori, L3);
listContenitori = utilita_1.default.filtraggio(listContenitori, B3);
/*COMPARA*/
console.log("Differenza=" + listContenitori[0].compara(B2, B1)); //B2= 4 B1= 5
/*STAMPA*/
for (let i = 0; i < listContenitori.length; i++) {
    console.log(listContenitori[i].getNome() + "-" + listContenitori[i].getQuantita() + "-" + listContenitori[i].getCodice());
}
//# sourceMappingURL=main.js.map