import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Armazem from "../dominio/armazem";

export default class ImpressorAcomodacao implements Impressor {
    imprimir(): string {
        const acomodacoes = Armazem.InstanciaUnica.Acomodacoes.filter(a => !a.Ocupada);
        const agrupamento = new Map<string, { tipo: Acomodacao; quantidade: number }>();

        // Agrupar acomodações por tipo e contar a quantidade disponível
        acomodacoes.forEach(acomodacao => {
            const nome = acomodacao.NomeAcomadacao.toString();
            if (agrupamento.has(nome)) {
                agrupamento.get(nome)!.quantidade += 1;
            } else {
                agrupamento.set(nome, { tipo: acomodacao, quantidade: 1 });
            }
        });

        // Gerar a descrição agrupada
        let descricao = 'Acomodações disponíveis:\n';
        agrupamento.forEach((item) => {
            descricao += `Nomenclatura: ${item.tipo.NomeAcomadacao}\n`
                + `-- Quantidade de leitos para solteiros: ${item.tipo.CamaSolteiro}\n`
                + `-- Quantidade de leitos para casais: ${item.tipo.CamaCasal}\n`
                + `-- Climatização: ${this.converterBooleano(item.tipo.Climatizacao)}\n`
                + `-- Quantidade de garagens disponíveis: ${item.tipo.Garagem}\n`
                + `-- Quantidade de suítes: ${item.tipo.Suite}\n`
                + `-- Quantidade disponíveis: ${item.quantidade}\n`
                + `-------------------------------------------------\n`;
        });

        return descricao;
    }

    private converterBooleano(valor: boolean): string {
        return valor ? 'sim' : 'não';
    }
}