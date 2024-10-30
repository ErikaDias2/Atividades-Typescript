import Menu from "../interfaces/menu";
import Cliente from "../modelos/cliente";

export default class MenuAtualizacaoDocumento implements Menu {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    mostrar(): void {
        console.log('***********************************');
        console.log('| Coletando os dados dos documentos...');
        console.log('-----------------------------------');
        this.cliente.Documentos.forEach((documento, index) => {
            console.log(`| ${index + 1} - ${documento.Numero} (${documento.Tipo})`);
        });
        console.log('| 0 - Finalizar alteração');
        console.log('----------------------------------');
    }
}