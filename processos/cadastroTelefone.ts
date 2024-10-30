import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefone extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados do telefone...')
        let confirmacao = 's'
        while (confirmacao.toLowerCase() == 's') {
            let ddd = this.entrada.receberTexto('Qual o ddd do telefone?')
            let numero = this.entrada.receberTexto('Qual o número do telefone?')
            let telefone = new Telefone(ddd, numero)
            this.cliente.Telefones.push(telefone)
            confirmacao = this.entrada.receberTexto('Gostaria de adicionar mais um número? (S/N)')
        }
    }
}