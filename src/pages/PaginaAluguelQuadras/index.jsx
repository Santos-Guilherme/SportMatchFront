import React from 'react';
import './index.scss';
import CardQuadra from '../../components/CardQuadra';

function PaginaAluguelQuadras() {
    const quadras = [
        {
            imagem: '/assets/images/quadra1.jpg',
            nome: 'Quadra de Futebol',
            localizacao: 'São Paulo, SP',
            preco: '100,00',
        },
        {
            imagem: '/assets/images/quadra2.jpg',
            nome: 'Quadra de Basquete',
            localizacao: 'Rio de Janeiro, RJ',
            preco: '80,00',
        },
        // Adicione mais quadras aqui conforme necessário
    ];

    return (
        <div className="pagina-aluguel-quadras">
            <header className="cabecalho">
                <h1>Alugue uma Quadra</h1>
                <p>Escolha a quadra que deseja alugar e reserve seu horário para jogar!</p>
            </header>

            <div className="lista-quadras">
                {quadras.map((quadra, index) => (
                    <CardQuadra 
                        key={index}
                        imagem={quadra.imagem}
                        nome={quadra.nome}
                        localizacao={quadra.localizacao}
                        preco={quadra.preco}
                    />
                ))}
            </div>
        </div>
    );
}

export default PaginaAluguelQuadras;
