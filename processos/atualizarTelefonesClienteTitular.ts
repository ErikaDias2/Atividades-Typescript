import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import MenuTipoAtualizacaoTelefone from "../menus/menuTipoAtualizacaoTelefone";
import CadastroTelefone from "./cadastroTelefone";
import AtualizarTelefone from "./atualizarTelefone";
import MenuAtualizacaoTelefone from "../menus/menuAtualizacaoTelefone";

export default class AtualizarTelefonesClienteTitular extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoAtualizacaoTelefone()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando a atualização de telefones...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Selecione qual opção será utilizada')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroTelefone(this.cliente)
                    this.processo.processar()
                    break
                case 2:
                    let menuAtualizacao = new MenuAtualizacaoTelefone(this.cliente);
                    menuAtualizacao.mostrar();
                    let telefoneSelecionado = this.entrada.receberNumero(`Selecione o documento que deseja atualiza:)`);
                    if (telefoneSelecionado > 0 && telefoneSelecionado <= this.cliente.Telefones.length) {
                        this.processo = new AtualizarTelefone(this.cliente, telefoneSelecionado);
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