import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class DeletarClienteTitular extends Processo {
    private clientes: Cliente[];
    
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Iniciando a exclusão do cliente...");
        let documentoTitular = this.entrada.receberTexto('Qual o documento do titular que será deletado?');
        let indiceTitular = this.clientes.findIndex(titular => 
            titular.Documentos.some(documento => documento.Numero === documentoTitular)
        );
        
        if (indiceTitular !== -1) {
            let titularEncontrado = this.clientes[indiceTitular];
            console.log(`O titular que será deletado é: ${titularEncontrado.Nome}`);
            let confirmacao = this.entrada.receberTexto("Prosseguir com a exclusão? (S/N)");
            
            if (confirmacao.toLowerCase() === "s") {
                this.clientes.splice(indiceTitular, 1);
                console.log('Cliente deletado com sucesso.');
            } else {
                console.log('Operação de exclusão cancelada.');
            }
        } else {
            console.log("Erro: Nenhum titular encontrado com o documento informado.");
        }
    }
}