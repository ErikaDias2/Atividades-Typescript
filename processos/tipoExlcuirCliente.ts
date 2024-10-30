import Processo from "../abstracoes/processo";
import MenuTipoExclusaoCliente from "../menus/menuTipoExcluirCliente";
import DeletarClienteDependente from "./deletarClienteDependente";
import DeletarClienteTitular from "./deletarClienteTitular";

export default class TipoExcluirCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoExclusaoCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new DeletarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new DeletarClienteDependente()
                this.processo.processar()    
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}