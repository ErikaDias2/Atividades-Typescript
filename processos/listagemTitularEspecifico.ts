import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularEspecifico extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Iniciando a listagem do titular de um dependente específico...");
        let documentoDependente = this.entrada.receberTexto('Qual o documento do dependente?');
        this.clientes.forEach(titular => {
            if (titular.Dependentes.length > 0) {
                titular.Dependentes.forEach(dependente => {
                    let isDependente = dependente.Documentos.some(documento => documento.Numero === documentoDependente);
                    if (isDependente) {
                        this.impressor = new ImpressorCliente(titular);
                        console.log(this.impressor.imprimir());
                    } if (!isDependente) {
                        console.log('Erro: Nenhum dependente encontrado com o documento informado.');
                    }
                });
            }
        });
    
    }    
}
