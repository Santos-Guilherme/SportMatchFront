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
    const [filterNome, setFilterNome] = useState('');
    const [filterLocalizacao, setFilterLocalizacao] = useState('');
    const [filterId, setFilterId] = useState('');
    const [noResultsMessage, setNoResultsMessage] = useState('');

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleDeleteQuadra = (id) => {
        const updatedQuadras = quadras.filter(quadra => quadra.id !== id);
        setQuadras(updatedQuadras);
        setFilteredQuadras(updatedQuadras);
    };

    const handleFilterChange = (filterType, value) => {
        const updatedFilters = { nome: filterNome, localizacao: filterLocalizacao, id: filterId };
        updatedFilters[filterType] = value.trim();
        
        setFilteredQuadras(quadras.filter((quadra) => {
            return Object.keys(updatedFilters).every((key) => {
                if (!updatedFilters[key]) return true; // Ignore empty filters
                return quadra[key]?.toString().toLowerCase().includes(updatedFilters[key].toLowerCase());
            });
        }));

        // No results message
        const filtered = filteredQuadras.filter((quadra) => {
            return Object.keys(updatedFilters).every((key) => {
                if (!updatedFilters[key]) return true;
                return quadra[key]?.toString().toLowerCase().includes(updatedFilters[key].toLowerCase());
            });
        });

        setNoResultsMessage(filtered.length === 0 ? 'Nenhuma quadra encontrada com os filtros aplicados.' : '');
    };

    return (
        <div className='Quadras'>
            <Header />
            <div className='content-quadras'>
                <div className='info-quadras'>
                    <div className='content-titulo'>
                        <div></div>
                        <div>
                            <h2>Quadras</h2>
                        </div>
                        <div>
                            <button onClick={handleOpenModal} className='button-cadastroQuadras'>Cadastrar</button>
                        </div>
                    </div>
                    <div className='filters'>
                        <input
                            type="text"
                            placeholder="Filtrar por nome"
                            value={filterNome}
                            onChange={(e) => handleFilterChange('nome', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Filtrar por localização"
                            value={filterLocalizacao}
                            onChange={(e) => handleFilterChange('localizacao', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Filtrar por ID da Quadra"
                            value={filterId}
                            onChange={(e) => handleFilterChange('id', e.target.value)}
                        />
                    </div>
                    {noResultsMessage ? (
                        <div className="no-results-message">
                            {noResultsMessage}
                        </div>
                    ) : (
                        <div className='profile-list'>
                            {filteredQuadras.map((quadra) => (
                                <CardQuadra
                                    key={quadra.id}  // Usando o 'id' como chave
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
