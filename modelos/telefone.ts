import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo {
    public ddd: string
    public numero: string

    public constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    public clonar(): Telefone {
        return new Telefone(this.ddd, this.numero)
    }
}