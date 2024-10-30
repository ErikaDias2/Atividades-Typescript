import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";

export default class AtualizarDocumentos extends Processo {
    private cliente: Cliente;
    private documentoSelecionado: number;

    constructor(cliente: Cliente, documentoSelecionado: number) {
        super();
        this.cliente = cliente;
        this.documentoSelecionado = documentoSelecionado;
    }

    processar(): void {
        let documentoAtual = this.cliente.Documentos[this.documentoSelecionado - 1];
        console.log(`Documento atual: ${documentoAtual.Numero} (${documentoAtual.Tipo})`);
        let confirmarAlteracao = this.entrada.receberTexto('Deseja alterar esse documento? (S/N)');

        if (confirmarAlteracao.toLowerCase() === 's') {
            let novoNumero = this.entrada.receberTexto('Qual o novo número?');
            documentoAtual.Numero = novoNumero;
            console.log('Documento atualizado com sucesso!');
        } else {
            console.log('Operação de atualização cancelada.');
        }
    }
}
