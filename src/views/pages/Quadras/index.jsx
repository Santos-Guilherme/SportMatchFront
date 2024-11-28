import React, { useEffect, useState } from "react";
import "./index.scss";
import { listQuadras } from "../../../controllers/quadraController";
import QuadraCard from "../../components/QuadraCard";
import Modal from "../../components/Modal";
import PartidaForm from "../../components/PartidaForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Quadras = () => {
    const [quadras, setQuadras] = useState([]);
    const [quadraSelecionada, setQuadraSelecionada] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchQuadras = async () => {
            try {
                const response = await listQuadras();
                setQuadras(response);
            } catch (error) {
                console.error("Erro ao listar quadras:", error.message);
            }
        };

        fetchQuadras();
    }, []);

    const abrirModal = (quadra) => {
        setQuadraSelecionada(quadra);
        setIsModalOpen(true);
    };

    const fecharModal = () => {
        setQuadraSelecionada(null);
        setIsModalOpen(false);
    };

    return (
        <div className="Quadras">
            <Header />
            <section className="quadras-section">
                <h1>Quadras Disponíveis</h1>
                <div className="quadras-list">
                    {quadras.map((quadra) => (
                        <QuadraCard
                            key={quadra.id_quadra}
                            quadra={quadra}
                            abrirModal={abrirModal}
                        />
                    ))}
                </div>
            </section>

            {isModalOpen && (
                <Modal onClose={fecharModal}>
                    <PartidaForm quadra={quadraSelecionada} onClose={fecharModal} />
                </Modal>
            )}

            <Footer />
        </div>
    );
};

export default Quadras;
