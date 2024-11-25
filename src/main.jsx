import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';

import Home from './views/pages/Home';
import Partidas from './views/pages/Partidas';
import Login from './views/pages/Login';
import Quadras from './views/pages/User/Quadra';
import Header from './views/components/Header';
import { AuthProvider } from './contexts/AuthContext';
import Sobre from './views/pages/Sobre';
import Ajuda from './views/pages/Ajuda';
import PoliticaDePrivacidade from './views/pages/PoliticaDePrivacidade';
import TermosDeUso from './views/pages/TermosDeUso';
import Footer from './views/components/Footer';
import Registro from './views/pages/Registro';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/partidas" element={<Partidas />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/ajuda" element={<Ajuda />} />
                        <Route path="/quadras" element={<Quadras />} />
                        <Route path="/politica" element={<PoliticaDePrivacidade />} />
                        <Route path="/termos" element={<TermosDeUso />} />
                        <Route path="/registro" element={<Registro />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

// Renderização da aplicação
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
