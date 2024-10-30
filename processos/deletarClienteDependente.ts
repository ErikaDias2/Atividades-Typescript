import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class DeletarClienteDependente extends Processo {
    private clientes: Cliente[];
    
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Iniciando a exclusão do dependente...");
        let documentoDependente = this.entrada.receberTexto('Qual o documento do dependente que será deletado?');
        this.clientes.forEach(titular => {
            if (titular.Dependentes.length > 0) {
                let indiceDependente = titular.Dependentes.findIndex(dependente => 
                    dependente.Documentos.some(documento => documento.Numero === documentoDependente)
                );
                if (indiceDependente !== -1) {
                    let dependente = titular.Dependentes[indiceDependente];
                    console.log(`O dependente que será deletado é: ${dependente.Nome}`);
                    let confirmacao = this.entrada.receberTexto("Prosseguir com a exclusão? (S/N)");
                    if (confirmacao.toLowerCase() === "s") {
                        titular.Dependentes.splice(indiceDependente, 1);
                        console.log('Dependente deletado com sucesso.');
                    } else {
                        console.log('Operação de exclusão cancelada.');
                    }
                }
            } else {
                console.log('Erro: Nenhum dependente encontrado com o documento informado.');
            }
        });

    }
}
