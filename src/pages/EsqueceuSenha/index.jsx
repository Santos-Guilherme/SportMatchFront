import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function EsqueceuSenha() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email enviado para recuperação de senha:', email);
  };

  return (
    <div className="esqueceu-senha">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">Recuperação de Senha</h1>
          <p>Digite o seu e-mail para receber as instruções de recuperação de senha.</p>
          <div className="input-group">
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>

        <div className="login-link">
          <Link to="/login">Voltar para o Login</Link>
        </div>
      </div>
    </div>
  );
}
