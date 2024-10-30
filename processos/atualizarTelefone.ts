import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";

export default class AtualizarTelefone extends Processo {
    private cliente: Cliente;
    private telefoneSelecionado: number

    constructor(cliente: Cliente, telefoneSelecionado: number) {
        super();
        this.cliente = cliente;
        this.telefoneSelecionado = telefoneSelecionado
    }

    processar(): void {
        let telefoneAtual = this.cliente.Telefones[this.telefoneSelecionado - 1];
        console.log(`Telefone atual: (${telefoneAtual.Ddd}) ${telefoneAtual.Numero}`);
        
        let confirmarAlteracao = this.entrada.receberTexto('Deseja alterar esse telefone? (S/N)');

        if (confirmarAlteracao.toLowerCase() === 's') {
            let novoDdd = this.entrada.receberTexto('Qual o novo DDD?');
            let novoNumero = this.entrada.receberTexto('Qual o novo número?');
            telefoneAtual.Ddd = novoDdd;
            telefoneAtual.Numero = novoNumero;
            console.log('Telefone atualizado com sucesso!');
        } else {
            console.log('Operação de atualização cancelada.');
        }
    }
}