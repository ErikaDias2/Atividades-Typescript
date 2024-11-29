import Quartos from "../components/Quartos";

export default function FamiliaSuper() {
    return (
        <Quartos
            nome="Família Super"
            camasCasal={2}
            camasSolteiro={6}
            suites={3}
            garagens={2}
            climatizacao={true}
            imagem="./FamiliaSuper.png"
        />
    );
}
