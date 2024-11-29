import Quartos from "../components/Quartos";

export default function CasalSimples() {
    return (
        <Quartos
            nome="Casal Simples"
            camasCasal={1}
            camasSolteiro={0}
            suites={1}
            garagens={1}
            climatizacao={true}
            imagem="./CasalSimples.png"
        />
    );
}
