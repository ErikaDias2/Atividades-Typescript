import Quartos from "../components/Quartos";

export default function FamiliaMais() {
    return (
        <Quartos
            nome="Família Mais"
            camasCasal={1}
            camasSolteiro={5}
            suites={2}
            garagens={2}
            climatizacao={true}
            imagem="./FamiliaMais.png"
        />
    );
}
