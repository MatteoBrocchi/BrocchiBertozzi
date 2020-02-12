import Contenitore from "./contenitore";

export default class LAT extends Contenitore {
    constructor(codice: number, nome: string, quantita: number) {
        super(nome, quantita, codice)
    }
}