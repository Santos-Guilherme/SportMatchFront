import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login'
import App from './App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/' element = {<App/>}/>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
