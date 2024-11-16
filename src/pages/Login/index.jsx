import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <div className="Login">
      <div className="container">
        <div className="form">
          <form className="login-form">
            <div className="form-header">
              <h1 className="title">Login</h1>
              <p>Não tem uma conta? <Link to="/registro" className="register-link">Registrar</Link></p>
            </div>
            <div className="input-group">
              <div className="input-box">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Senha" required />
              </div>
              <div className="input-box">
                <Link to="/esqueceu_senha">Esqueceu a senha?</Link>
              </div>
            </div>
            <button type="button" className="continue-button">Entrar</button>
          </form>
        </div>
        <div className="form-image">
          <img src="/assets/images/SportMatch-removebg-preview.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
