import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import AtualizarDocumentosCliente from "./atualizarDocumentosCliente"

export default class AtualizarClienteDependente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Iniciando a edição do cliente dependente...");
        let documentoDependente = this.entrada.receberTexto('Qual o documento do dependente?');
        let clienteTitular = this.clientes.find(cliente => 
            cliente.Dependentes.some(dependente => 
                dependente.Documentos.some(doc => doc.Numero === documentoDependente)
            )
        );

        if (clienteTitular) {
            let dependente = clienteTitular.Dependentes.find(dep => 
                dep.Documentos.some(doc => doc.Numero === documentoDependente)
            );
            
            if (dependente) {
                console.log(`O dependente que será atualizado é: ${dependente.Nome}`);
                let confirmacao = this.entrada.receberTexto("Prosseguir com a atualização? (S/N)");
                if (confirmacao.toLowerCase() === "s") {
                    let nome = this.entrada.receberTexto(`Nome atual é ${dependente.Nome}. Deseja atualizar? (deixe vazio para manter o mesmo)`);
                    if (nome) dependente.Nome = nome;

                    let nomeSocial = this.entrada.receberTexto(`Nome social atual é ${dependente.NomeSocial}. Deseja atualizar? (deixe vazio para manter o mesmo)`);
                    if (nomeSocial) dependente.NomeSocial = nomeSocial;

                    let dataNascimento = this.entrada.receberData(`Data de nascimento atual é ${dependente.DataNascimento.toLocaleDateString()}. Deseja atualizar? (deixe vazio para manter o mesmo)`);
                    if (dataNascimento) dependente.DataNascimento = dataNascimento;

                    this.processo = new AtualizarDocumentosCliente(dependente);
                    this.processo.processar();
                    console.log("Dependente atualizado com sucesso!");
                } else {
                    console.log("Atualização cancelada.");
                }
            } else {
                console.log("Dependente não encontrado.");
            }
        } else {
            console.log("Titular com dependente não encontrado.");
        }
    }
}
