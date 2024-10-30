import Menu from "../interfaces/menu";

export default class MenuTipoAtualizacaoTelefone implements Menu {
    mostrar(): void {
        console.log("***************************")
        console.log("| Por favor, selecione uma opção...")
        console.log("---------------------------")
        console.log("| 1 - Inserir novo número de telefone")
        console.log("| 2 - Atualizar número de telefone existente")
        console.log("****************************")
        console.log("| 0 - Sair")
        console.log("----------------------------")
    }
}