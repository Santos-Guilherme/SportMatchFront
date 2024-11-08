// src/pages/Quadras/index.jsx
import React, { useState } from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardQuadra from '../../components/QuadraCard';
import QuadraCadastro from '../../components/QuadraCadastro';

export default function Quadras() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quadras, setQuadras] = useState([
        {
            id: 1,
            nome: 'Quadra A',
            localizacao: 'Rua X, Centro',
            tipo: 'Futebol',
        },
        {
            id: 2,
            nome: 'Quadra B',
            localizacao: 'Rua Y, Zona Norte',
            tipo: 'Basquete',
        },
        {
            id: 3,
            nome: 'Quadra C',
            localizacao: 'Rua Z, Zona Sul',
            tipo: 'Vôlei',
        },
    ]);
    const [filteredQuadras, setFilteredQuadras] = useState(quadras);
    const [filters, setFilters] = useState({ nome: '', localizacao: '', id: '' });

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleDeleteQuadra = (id) => {
        const updatedQuadras = quadras.filter(quadra => quadra.id !== id);
        setQuadras(updatedQuadras);
        setFilteredQuadras(updatedQuadras);
    };

    const handleFilterChange = (filterType, value) => {
        const updatedFilters = { ...filters, [filterType]: value.trim() };
        setFilters(updatedFilters);

        const filtered = quadras.filter((quadra) =>
            Object.keys(updatedFilters).every((key) =>
                !updatedFilters[key] || quadra[key]?.toString().toLowerCase().includes(updatedFilters[key].toLowerCase())
            )
        );
        
        setFilteredQuadras(filtered);
    };

    return (
        <div className='Quadras'>
            <Header />
            <div className='content-quadras'>
                <div className='info-quadras'>
                    <div className='content-titulo'>
                        <h2>Quadras</h2>
                    </div>
                    <div className='filters'>
                        <input
                            type="text"
                            placeholder="Filtrar por nome"
                            value={filters.nome}
                            onChange={(e) => handleFilterChange('nome', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Filtrar por localização"
                            value={filters.localizacao}
                            onChange={(e) => handleFilterChange('localizacao', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Filtrar por ID da Quadra"
                            value={filters.id}
                            onChange={(e) => handleFilterChange('id', e.target.value)}
                        />
                    </div>
                    {filteredQuadras.length === 0 ? (
                        <div className="no-results-message">
                            Nenhuma quadra encontrada com os filtros aplicados.
                        </div>
                    ) : (
                        <div className='profile-list'>
                            {filteredQuadras.map((quadra) => (
                                <CardQuadra
                                    key={quadra.id}
                                    id={quadra.id}
                                    nomeQuadra={quadra.nome}
                                    localizacao={quadra.localizacao}
                                    tipo={quadra.tipo}
                                    onDelete={() => handleDeleteQuadra(quadra.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
            <QuadraCadastro isOpen={isModalOpen} onClose={handleCloseModal} updateParent={setQuadras} />
        </div>
    );
}
