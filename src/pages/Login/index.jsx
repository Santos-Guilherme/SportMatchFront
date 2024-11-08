// pages/Login.jsx
import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPasswordToggle = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="Login">
      <div className="form-box">
        {showForgotPassword ? (
          <form className="forgot-password-form">
            <h1>Recuperar Senha</h1>
            <input type="email" placeholder="Digite seu email para recuperar a senha" required />
            <div>
              <button type="button">Enviar</button>
              <button type="button" onClick={handleForgotPasswordToggle}>
                Voltar ao Login
              </button>
            </div>
          </form>
        ) : (
          <form className="login-form">
            <img src="/assets/images/SportMatch-removebg-preview.png" className="logo" alt="Logo" />
            <h1>Login</h1>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <button type="button">Entrar</button>
            <a href="#" onClick={handleForgotPasswordToggle}>Esqueceu a senha?</a>
            <p>Não tem uma conta? <Link to="/registro">Registrar</Link></p>
          </form>
        )}
      </div>
    </div>
  );
}
