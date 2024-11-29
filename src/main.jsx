import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import Home from './views/pages/Home';
import Partidas from './views/pages/Partidas';
import Login from './views/pages/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Sobre from './views/pages/Sobre';
import Ajuda from './views/pages/Ajuda';
import PoliticaDePrivacidade from './views/pages/PoliticaDePrivacidade';
import TermosDeUso from './views/pages/TermosDeUso';
import Registro from './views/pages/Registro';
import DashboardAdmin from './views/pages/DashboardAdmin';
import MinhasPartidas from './views/pages/MinhasPartidas';
import Quadras from './views/pages/Quadras';
import EsqueceuSenha from './views/pages/EsqueceuSenha';
import Profile from './views/pages/Profile';
import Convites from './views/pages/Convites';
import Configurações from './views/pages/Configuracoes';

// Componente de rota privada
const PrivateRoute = ({ element: Element, ...rest }) => {
    const { user } = useAuth();
    return user ? <Element /> : <Navigate to="/login" />;
};

// Componente de rota administrativa
const AdminRoute = ({ element: Element, ...rest }) => {
    const { user } = useAuth();
    return user && user.tipo === 'administrador' ? (
        <Element />
    ) : (
        <Navigate to="/" />
    );
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <Routes>
                        {/* Rotas públicas */}
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/ajuda" element={<Ajuda />} />
                        <Route path="/politica" element={<PoliticaDePrivacidade />} />
                        <Route path="/termos" element={<TermosDeUso />} />
                        <Route path="/cadastro" element={<Registro />} />
                        <Route path="/esqueceu_senha" element={<EsqueceuSenha />} />

                        {/* Rotas privadas (usuários logados) */}
                        <Route path="/partidas" element={<PrivateRoute element={Partidas} />} />
                        <Route path="/minhas-partidas" element={<PrivateRoute element={MinhasPartidas} />} />
                        <Route path="/quadras" element={<PrivateRoute element={Quadras} />} />
                        <Route path="/perfil" element={<PrivateRoute element={Profile} />} />
                        <Route path="/convites" element={<PrivateRoute element={Convites} />} />
                        <Route path="/configuracoes" element={<PrivateRoute element={Configurações} />} />

                        {/* Rotas administrativas */}
                        <Route
                            path="/dashboard"
                            element={<AdminRoute element={DashboardAdmin} />}
                        />
                    </Routes>
                </div>
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
