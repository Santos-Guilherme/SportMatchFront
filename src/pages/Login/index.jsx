import React, { useState } from 'react';
import './index.scss';


export default function Login() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className='Login'>
      <div className={`container ${active ? 'active' : ''}`} id="container">
        <div className="form-container sign-up">
          <form>
            <img src='/assets/images/SportMatch-removebg-preview.png' className='Logo'></img>
            <h1>Registrar</h1>
            <input type="text" placeholder="Usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="button">Registrar</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form>
            <img src='/assets/images/SportMatch-removebg-preview.png' className='Logo2'></img>
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="button">Login</button>
            <br>
            </br>
            <a href="#">Esqueceu a Senha?</a>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bem Vindo, de Volta!</h1>
              <p>Entre na sua conta</p>
              <button className="hidden" onClick={handleToggle}>
                Login
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Olá, Amigo!</h1>
              <p>Registre-se no site para ter acesso a plataforma</p>
              <button className="hidden" onClick={handleToggle}>
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
