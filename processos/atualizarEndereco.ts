import Processo from "../abstracoes/processo";
import ImpressorEndereco from "../impressores/impressorEndereco";
import Cliente from "../modelos/cliente";
import AtualizarEnderecoTitular from "./atualizarEnderecoTitular";

export default class AtualizarEndereco extends Processo {
    private cliente: Cliente;
    private impressor: ImpressorEndereco;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.impressor = new ImpressorEndereco(this.cliente.Endereco);
    }

    processar(): void {
        console.log('***********************************');
        console.log('| Coletando os dados do endereço atual...');
        console.log('-----------------------------------');
        console.log(this.impressor.imprimir());

        let confirmarAlteracao = this.entrada.receberTexto("Deseja atualizar o endereço? (S/N)");
        if (confirmarAlteracao.toLowerCase() === 's') {
            this.processo = new AtualizarEnderecoTitular(this.cliente);
            this.processo.processar();
        } else {
            console.log('Operação de atualização cancelada.');
        }
    }
}
