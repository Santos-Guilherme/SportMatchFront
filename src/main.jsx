import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login'
import './styles/style.scss';
import Home from './pages/Home';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
