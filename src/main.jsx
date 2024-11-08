import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login'
import './styles/style.scss';
import Home from './pages/Home';
import Ajuda from './pages/Ajuda';
import Partidas from './pages/Partidas';
import Quadras from './pages/Quadras';
import Sobre from './pages/Sobre';
import PaginaAluguelQuadras from './pages/PaginaAluguelQuadras';
import Registro from './pages/Registro';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import TermosDeUso from './pages/TermosDeUso';
import Explorar from './pages/Explorar';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path='/ajuda' element ={<Ajuda/>}/>
        <Route path='/partida' element ={<Partidas/>}/>
        <Route path='/quadra' element ={<Quadras/>}/>
        <Route path='/sobre' element ={<Sobre/>}/>
        <Route path='/alugar' element ={<PaginaAluguelQuadras/>}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/politica" element={<PoliticaDePrivacidade />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
