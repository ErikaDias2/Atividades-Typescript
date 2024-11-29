import React from "react";
import "./Quartos.css";

type QuartosProps = {
    nome: string;
    camasCasal: number;
    camasSolteiro: number;
    suites: number;
    garagens: number;
    climatizacao: boolean;
    imagem: string;
};

const Quartos: React.FC<QuartosProps> = ({
    nome,
    camasCasal,
    camasSolteiro,
    suites,
    garagens,
    imagem,
}) => {
    return (
        <div className="quarto-container">
            <div className="imagem-container">
                <img className="img-topo" src={imagem} alt={`Imagem do quarto ${nome}`} />
                <div className="texto-sobreposto">
                    <h2>Informações sobre o quarto <br /> {nome}</h2>
                    <p>Saiba mais embaixo!</p>
                </div>
            </div>
            <div className="conteudo">
                <h1>Quarto {nome} conta com:</h1>
                <div className="informacoes">
                    <p>{camasCasal} cama de casal</p>
                    <p>{camasSolteiro} cama de solteiro</p>
                    <p>{suites} suíte</p>
                    <p>{garagens} vaga de garagem</p>
                    <p>Climatização</p>
                </div>
            </div>
            <div className="reserva">
                <h1>Realize agora sua reserva!</h1>
                <button className="botao-reservar">Reservar</button>
            </div>
        </div>
    );
};

export default Quartos;