import Processo from "../abstracoes/processo";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        const diretores = [
            new DiretorSolteiroSimples(),
            new DiretorCasalSimples(),
            new DiretorFamiliaSimples(),
            new DiretorFamiliaMais(),
            new DiretorFamiliaSuper(),
            new DiretorSolteiroMais(),
        ];

        // Criar 5 quartos para cada tipo de acomodação
        diretores.forEach((diretor) => {
            for (let i = 0; i < 5; i++) {
                this.acomodacoes.push(diretor.construir());
            }
        });
    }
}