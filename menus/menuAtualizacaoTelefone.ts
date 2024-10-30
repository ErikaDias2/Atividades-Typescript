import Menu from "../interfaces/menu";
import Cliente from "../modelos/cliente";

export default class MenuAtualizacaoTelefone implements Menu {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    mostrar(): void {
        console.log('***********************************');
            console.log('| Coletando os dados dos telefones...');
            console.log('-----------------------------------');
            this.cliente.Telefones.forEach((telefone, index) => {
                console.log(`| ${index + 1} - (${telefone.Ddd}) ${telefone.Numero}`);
            });
            console.log('| 0 - Finalizar alteração');
            console.log('----------------------------------');
    }
}
