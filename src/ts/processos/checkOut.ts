import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Acomodacao from "../modelos/acomodacao";

export default class CheckOut extends Processo {
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

        const acomodacoesVinculadas = this.acomodacoes.filter(a => a.Cliente === cliente);
        if (acomodacoesVinculadas.length === 0) {
            console.log('O cliente não está hospedado.');
            return;
        }

        // Agrupar acomodações vinculadas por tipo e contar a quantidade
        const agrupamento = new Map<string, { tipo: Acomodacao; quantidade: number }>();
        acomodacoesVinculadas.forEach(acomodacao => {
            const nome = acomodacao.NomeAcomadacao.toString();
            if (agrupamento.has(nome)) {
                agrupamento.get(nome)!.quantidade += 1;
            } else {
                agrupamento.set(nome, { tipo: acomodacao, quantidade: 1 });
            }
        });

        // Exibir acomodações agrupadas
        console.log('Acomodações vinculadas ao cliente:');
        let index = 1;
        const opcoes: { tipo: Acomodacao; quantidade: number }[] = [];

        agrupamento.forEach((item) => {
            console.log(`${index} - ${item.tipo.NomeAcomadacao} (Quantidade: ${item.quantidade})`);
            opcoes.push(item);
            index++;
        });

        const escolha = this.entrada.receberNumero('Selecione a acomodação para check-out pelo número:');
        const itemSelecionado = opcoes[escolha - 1];

        if (!itemSelecionado) {
            console.log('Opção inválida.');
            return;
        }

        // Realizar o check-out de uma das acomodações vinculadas
        const acomodacaoSelecionada = acomodacoesVinculadas.find(a => a.NomeAcomadacao === itemSelecionado.tipo.NomeAcomadacao);
        if (acomodacaoSelecionada) {
            acomodacaoSelecionada.Cliente = null;
            console.log(`Check-out realizado com sucesso para ${cliente.Nome} da acomodação ${acomodacaoSelecionada.NomeAcomadacao}.`);
        } else {
            console.log('Erro ao realizar o check-out.');
        }
    }
}