import Contenitore from "./contenitore";

export default class BID extends Contenitore {
    constructor(codice: number, nome: string, quantita: number) {
        super(nome, quantita, codice)
    }
}