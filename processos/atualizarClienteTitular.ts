import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import AtualizarDocumentosCliente from "./atualizarDocumentosCliente";
import AtualizarEndereco from "./atualizarEndereco";
import AtualizarTelefonesClienteTitular from "./atualizarTelefonesClienteTitular";

export default class AtualizarClienteTitular extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Iniciando a edição do cliente titular...");
        let documentoCliente = this.entrada.receberTexto('Qual o documento do cliente?');
        let cliente = this.clientes.find(cliente =>
            cliente.Documentos.some(documento => documento.Numero === documentoCliente)
        );

        if (cliente) {
            console.log(`O cliente que será atualizado é: ${cliente.Nome}`);
            let confirmacao = this.entrada.receberTexto("Prosseguir com a atualização? (S/N)");
            if (confirmacao.toLowerCase() === "s") {
                let nome = this.entrada.receberTexto(`Nome atual é ${cliente.Nome}. Deseja atualizar? (deixe vazio para manter o mesmo)`);
                if (nome) cliente.Nome = nome;

                let nomeSocial = this.entrada.receberTexto(`Nome social atual é ${cliente.NomeSocial}. Deseja atualizar? (deixe vazio para manter o mesmo)`);
                if (nomeSocial) cliente.NomeSocial = nomeSocial;

                let dataNascimento = this.entrada.receberData(`Data de nascimento atual é ${cliente.DataNascimento.toLocaleDateString()}. Deseja atualizar? (deixe vazio para manter o mesmo)`);
                if (dataNascimento) cliente.DataNascimento = dataNascimento;

                this.processo = new AtualizarTelefonesClienteTitular(cliente)
                this.processo.processar()

                this.processo = new AtualizarDocumentosCliente(cliente)
                this.processo.processar()

                this.processo = new AtualizarEndereco(cliente)
                this.processo.processar()
                console.log("Cliente atualizado com sucesso!");
            } else {
                console.log("Atualização cancelada.");
            }
        } else {
            console.log("Cliente não encontrado.");
        }
    }
}
