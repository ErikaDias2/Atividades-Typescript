import Menu from "../interfaces/menu";

export default class MenuTipoAtualizacaoDocumento implements Menu {
    mostrar(): void {
        console.log("***************************")
        console.log("| Por favor, selecione uma opção...")
        console.log("---------------------------")
        console.log("| 1 - Inserir novo documento")
        console.log("| 2 - Atualizar documento existente")
        console.log("****************************")
        console.log("| 0 - Sair")
        console.log("----------------------------")
    }
}