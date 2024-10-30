import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";

export default class AtualizarEnderecoTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        let rua = this.entrada.receberTexto('Qual a nova rua?');
        let bairro = this.entrada.receberTexto('Qual o novo bairro?');
        let cidade = this.entrada.receberTexto('Qual a nova cidade?');
        let estado = this.entrada.receberTexto('Qual o novo estado?');
        let pais = this.entrada.receberTexto('Qual o novo país?');
        let codigoPostal = this.entrada.receberTexto('Qual o novo código postal?');

        let enderecoAtual = this.cliente.Endereco;
        enderecoAtual.Rua = rua;
        enderecoAtual.Bairro = bairro;
        enderecoAtual.Cidade = cidade;
        enderecoAtual.Estado = estado;
        enderecoAtual.Pais = pais;
        enderecoAtual.CodigoPostal = codigoPostal;

        console.log('Endereço atualizado com sucesso!');
    }
}
