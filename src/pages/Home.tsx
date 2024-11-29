import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";

const quartos = [
    {
        nome: "Solteiro Simples",
        link: "/solteiro-simples",
        imagem: "./SolteiroSimples.png",
    },
    {
        nome: "Solteiro Mais",
        link: "/solteiro-mais",
        imagem: "./SolteiroMais.png",
    },
    {
        nome: "Casal Simples",
        link: "/casal-simples",
        imagem: "./CasalSimples.png",
    },
    {
        nome: "Família Simples",
        link: "/familia-simples",
        imagem: "./FamiliaSimples.png",
    },
    {
        nome: "Família Mais",
        link: "/familia-mais",
        imagem: "./FamiliaMais.png",
    },
    {
        nome: "Família Super",
        link: "/familia-super",
        imagem: "./FamiliaSuper.png",
    },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Navbar />
            <img className="img-principal" src="./Home.png" alt="" />
            <h1 className="titulo">Nossos quartos</h1>
            <div className="quartos-container">
                {quartos.map((quarto, index) => (
                    <div key={index} className="card">
                        <img src={quarto.imagem} alt={quarto.nome} className="card-img" />
                        <h1 className="card-title">{quarto.nome}</h1>
                        <div className="card-buttons">
                            <button
                                className="button"
                                onClick={() => navigate(quarto.link)}
                            >
                                Saiba Mais
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
