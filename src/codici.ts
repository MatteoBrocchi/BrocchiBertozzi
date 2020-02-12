var codici: number[] = new Array();                /*lita con tutti i codici gia usciti*/
export default class Codici {
    static getCodice(): number {
        if (codici.length != 0) {
            do {
                var trovato: boolean = false;
                var random: number = Math.floor(Math.random() * 5999999);
                for (let i: number = 0; i < codici.length; i++) {
                    if (codici[i] != random) trovato = true;  /*inverto valore solo se trovo diverso*/
                }
            } while (!trovato)
        }
        else
            var random: number = Math.floor(Math.random() * 5999999);
        codici.push(random);
        return random;
    }
}