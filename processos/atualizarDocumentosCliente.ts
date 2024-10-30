import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import MenuTipoAtualizacaoDocumento from "../menus/menuTipoAtualizacaoDocumento";
import MenuAtualizacaoDocumento from "../menus/menuAtualizacaoDocumento";
import AtualizarDocumentos from "./atualizarDocumentos";

export default class AtualizarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoAtualizacaoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando a atualização de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Selecione qual opção será utilizada')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastrarDocumentosCliente(this.cliente)
                    this.processo.processar()
                    break
                case 2:
                    let menuAtualizacao = new MenuAtualizacaoDocumento(this.cliente);
                    menuAtualizacao.mostrar();
                    let documentoSelecionado = this.entrada.receberNumero(`Selecione o documento que deseja atualiza:)`);
                    if (documentoSelecionado > 0 && documentoSelecionado <= this.cliente.Documentos.length) {
                        this.processo = new AtualizarDocumentos(this.cliente, documentoSelecionado);
                        this.processo.processar();
                    } else {
                        console.log('Opção inválida. Tente novamente.');
                    }
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}