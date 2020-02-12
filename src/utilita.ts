import Contenitore from "./contenitore";

export default class Utilita {
    static filtraggio(z: Contenitore[], contenitore: Contenitore): Contenitore[] {
        for (let i: number = 0; i < z.length; i++) {
            if (z[i].getNome() == contenitore.getNome()) {
                z.splice(i, 1);
                i=-1;
            }
        }
        return z;
    }
}