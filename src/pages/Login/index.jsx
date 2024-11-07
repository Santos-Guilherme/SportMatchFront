import React, { useState } from 'react';
import './index.scss';

export default function Login() {
  const [active, setActive] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const handleForgotPasswordToggle = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="Login">
      <div className={`container ${active ? 'active' : ''}`} id="container">
        {showForgotPassword ? (
          <div className="form-container forgot-password">
            <form>
              <h1>Recuperar Senha</h1>
              <input type="email" placeholder="Digite seu email para recuperar a senha" required />
              <button type="button">Enviar</button>
              <button type="button" onClick={handleForgotPasswordToggle}>
                Voltar ao Login
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="form-container sign-up">
              <form>
                <img src='/assets/images/SportMatch-removebg-preview.png' className='Logo' alt="Logo" />
                <h1>Registrar</h1>
                <input type="text" placeholder="Usuário" required />
                <input type="email" placeholder="Email" required />

                {/* Senha e Confirmar Senha em uma linha */}
                <div className="row">
                  <input type="password" placeholder="Senha" required />
                  <input type="password" placeholder="Confirme a Senha" required />
                </div>

                <input type="text" placeholder="CPF" required />
                <input type="date" placeholder="Data de Nascimento" required />

                {/* Cidade e Estado em uma linha */}
                <div className="row">
                  <input type="text" placeholder="Cidade" required />
                  <input type="text" placeholder="Estado" required />
                </div>

                <input type="text" placeholder="Endereço" required />

                <select className="user-type" required>
                  <option value="">Selecione o tipo de usuário</option>
                  <option value="jogador">Jogador</option>
                  <option value="administrador">Administrador de Quadra</option>
                </select>

                <button type="button">Registrar</button>
              </form>
            </div>

            <div className="form-container sign-in">
              <form>
                <img src='/assets/images/SportMatch-removebg-preview.png' className='Logo2' alt="Logo" />
                <h1>Login</h1>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <button type="button">Login</button>
                <br />
                <a href="#" onClick={handleForgotPasswordToggle}>
                  Esqueceu a Senha?
                </a>
              </form>
            </div>
          </>
        )}

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
              <p>Registre-se no site para ter acesso à plataforma</p>
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
