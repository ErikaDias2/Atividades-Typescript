import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Iniciando o cadastro de um novo dependente...");
        let documentoTitular = this.entrada.receberTexto('Qual o documento do titular?');
        this.clientes.forEach(cliente => {
            let titular = cliente.Documentos.some(documento => documento.Numero === documentoTitular);

            if (titular) {
                console.log("O dependente será cadastrado no titular: " + cliente.Nome);
                let nome = this.entrada.receberTexto('Qual o nome do novo dependente?');
                let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?');
                let dataNascimento = this.entrada.receberData('Qual é a data de nascimento do novo dependente?');
                let dependente = new Cliente(nome, nomeSocial, dataNascimento);
                
                this.processo = new CadastrarDocumentosCliente(dependente);
                this.processo.processar();

                let endereco = cliente.Endereco.clonar();
                dependente.Endereco = endereco;

                let telefones = cliente.Telefones.map(telefone => telefone.clonar());
                dependente.Telefones = telefones;

                cliente.Dependentes.push(dependente);
                dependente.Titular = cliente;
                console.log('Dependente cadastrado com sucesso!');
            }
            
            if (!titular) {
                console.log('Erro: Nenhum titular encontrado com o documento informado.');
            }
        });
    }
}
