import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../../Api/UserApi'; // Certifique-se de ajustar o caminho para o UserApi

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError(''); // Limpa mensagens de erro anteriores
      const credenciais = { usuario: email, senha: password };
      const response = await loginUser(credenciais);
      console.log('Login realizado com sucesso:', response);

      if(response.tipoUsuario == 1)
      navigate('/dashboard'); // Ajuste o caminho conforme necessário

      else
      navigate('/teste')
    } catch (err) {
      setError('Falha ao fazer login. Verifique suas credenciais.');
      console.error(err);
    }
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="form">
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-header">
              <h1 className="title">Login</h1>
              <p>Não tem uma conta? <Link to="/registro" className="register-link">Registrar</Link></p>
            </div>
            <div className="input-group">
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <Link to="/esqueceu_senha">Esqueceu a senha?</Link>
              </div>
              {error && <p className="error-message">{error}</p>}
            </div>
            <button
              type="button"
              className="continue-button"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </form>
        </div>
        <div className="form-image">
          <img src="/assets/images/SportMatch-removebg-preview.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
