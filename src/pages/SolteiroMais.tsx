import Quartos from "../components/Quartos";

export default function SolteiroMais() {
    return (
        <Quartos
            nome="Solteiro Mais"
            camasCasal={1}
            camasSolteiro={0}
            suites={1}
            garagens={1}
            climatizacao={true}
            imagem="./SolteiroMais.png"
        />
    );
}