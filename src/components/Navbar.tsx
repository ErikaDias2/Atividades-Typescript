import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const quartos = [
        { nome: "Solteiro Simples", rota: "/solteiro-simples" },
        { nome: "Solteiro Mais", rota: "/solteiro-mais" },
        { nome: "Casal Simples", rota: "/casal-simples" },
        { nome: "Família Simples", rota: "/familia-simples"},
        { nome: "Família Mais", rota: "/familia-mais"},
        { nome: "Família Super", rota: "/familia-super"}
    ];

    return (
        <div className="navbar">
            <img onClick={() => navigate("/")} src="./Logo.png" alt="Logo" />
            <div
                className="menu-item"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
            >
                <h4>Quartos</h4>
                {showMenu && (
                    <div className="dropdown-menu">
                        {quartos.map((quarto, index) => (
                            <p
                                key={index}
                                onClick={() => navigate(quarto.rota)}
                            >
                                {quarto.nome}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}