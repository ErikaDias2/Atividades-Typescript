import Quartos from "../components/Quartos";

export default function SolteiroSimples() {
    return (
        <Quartos
            nome="Solteiro Simples"
            camasCasal={0}
            camasSolteiro={1}
            suites={1}
            garagens={0}
            climatizacao={true}
            imagem="./SolteiroSimples.png"
        />
    );
}
