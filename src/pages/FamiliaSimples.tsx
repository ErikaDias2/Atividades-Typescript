import Quartos from "../components/Quartos";

export default function FamiliaSimples() {
    return (
        <Quartos
            nome="Solteiro Simples"
            camasCasal={1}
            camasSolteiro={2}
            suites={1}
            garagens={1}
            climatizacao={true}
            imagem="./FamiliaSimples.png"
        />
    );
}
