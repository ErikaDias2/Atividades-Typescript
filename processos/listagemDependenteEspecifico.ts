import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependenteEspecifico extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Iniciando a listagem dos dependentes de um titular específico...");
        let documentoTitular = this.entrada.receberTexto('Qual o documento do titular?');
        this.clientes.forEach(cliente => {
            let titular = cliente.Documentos.some(documento => documento.Numero === documentoTitular);

            if (titular) {
                if (cliente.Dependentes.length > 0) {
                    cliente.Dependentes.forEach(dependente => {
                        this.impressor = new ImpressorCliente(dependente);
                        console.log(this.impressor.imprimir());
                    });
                } else {
                    console.log('Erro: Esse titular não possui dependentes cadastrados.');
                }
            } if (!titular) {
                console.log('Erro: Nenhum titular encontrado com o documento informado.');
            }
        });
    }
}
