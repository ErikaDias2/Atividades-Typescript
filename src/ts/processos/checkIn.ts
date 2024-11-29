import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Acomodacao from "../modelos/acomodacao";

export default class CheckIn extends Processo {
    private clientes: Cliente[];
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        const documento = this.entrada.receberTexto('Informe o número do documento do cliente:');
        const cliente = this.clientes.find(c => c.Documentos.some(d => d.Numero === documento));

        if (!cliente) {
            console.log('Cliente não encontrado.');
            return;
        }

        const acomodacoesDisponiveis = this.acomodacoes.filter(a => !a.Ocupada);
        if (acomodacoesDisponiveis.length === 0) {
            console.log('Não há acomodações disponíveis.');
            return;
        }

        // Agrupar acomodações por tipo e contar quantas estão disponíveis
        const agrupamento = new Map<string, { tipo: Acomodacao; quantidade: number }>();
        acomodacoesDisponiveis.forEach(acomodacao => {
            const nome = acomodacao.NomeAcomadacao.toString();
            if (agrupamento.has(nome)) {
                agrupamento.get(nome)!.quantidade += 1;
            } else {
                agrupamento.set(nome, { tipo: acomodacao, quantidade: 1 });
            }
        });

        // Exibir acomodações agrupadas
        console.log('Acomodações disponíveis:');
        let index = 1;
        const opcoes: { tipo: Acomodacao; quantidade: number }[] = [];

        agrupamento.forEach((item) => {
            console.log(`${index} - ${item.tipo.NomeAcomadacao} (Disponíveis: ${item.quantidade})`);
            opcoes.push(item);
            index++;
        });

        const escolha = this.entrada.receberNumero('Selecione a acomodação pelo número:');
        const itemSelecionado = opcoes[escolha - 1];

        if (!itemSelecionado) {
            console.log('Opção inválida.');
            return;
        }

        // Atribuir o cliente a uma das acomodações disponíveis
        const acomodacaoSelecionada = acomodacoesDisponiveis.find(a => a.NomeAcomadacao === itemSelecionado.tipo.NomeAcomadacao);
        if (acomodacaoSelecionada) {
            acomodacaoSelecionada.Cliente = cliente;
            console.log(`Check-in realizado com sucesso para ${cliente.Nome} na acomodação ${acomodacaoSelecionada.NomeAcomadacao}.`);
        } else {
            console.log('Erro ao realizar o check-in.');
        }
    }
}