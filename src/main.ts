import Contenitore from "./contenitore";
import Utilita from "./utilita";
import LAT from "./lattine";
import BID from "./bidoni";
import Codici from "./codici";
/*TEST*/ 
var listContenitori: Contenitore[] = new Array();   /*lista con tutti i contenitori*/
/*RIEMPIMENTO CONTENITORI*/
var L1: Contenitore = new LAT(Codici.getCodice(), "Acqua", 1);
listContenitori.push(L1);
var L3: Contenitore = new LAT(Codici.getCodice(), "Acqua", 2);
listContenitori.push(L3);
var B1: Contenitore = new BID(Codici.getCodice(), "Olio", 5);
listContenitori.push(B1);
var B3: Contenitore = new BID(Codici.getCodice(), "Olio", 6);
listContenitori.push(B3);
var L2: Contenitore = new LAT(Codici.getCodice(), "Vino", 2);
listContenitori.push(L2);
var B2: Contenitore = new BID(Codici.getCodice(), "Aceto", 4);
listContenitori.push(B2);
/*FILTRAGGIO */
listContenitori = Utilita.filtraggio(listContenitori, L3);
listContenitori = Utilita.filtraggio(listContenitori, B3);
/*COMPARA*/
console.log("Differenza="+listContenitori[0].compara(B2,B1));  //B2= 4 B1= 5
/*STAMPA*/
for (let i: number = 0; i < listContenitori.length; i++) {
    console.log(listContenitori[i].getNome() + "-" + listContenitori[i].getQuantita() + "-" + listContenitori[i].getCodice());
}

