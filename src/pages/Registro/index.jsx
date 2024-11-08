import './index.scss';
import { Link } from 'react-router-dom';

export default function Registro() {
  return (
    <div className="Registro">
      <div className="container">
        <div className="form-image">
          <img src="/assets/images/SportMatch-removebg-preview.png" alt="Imagem de Registro" />
        </div>
        <div className="form">
          <form className="registro-form">
            <div className="form-header">
              <h1 className="title">Cadastre-se</h1>
              <Link to="/login" className="login-button">Entrar</Link>
            </div>
            <div className="input-group">
              {[
                { id: 'username', type: 'text', label: 'Usuário', placeholder: 'Digite seu usuário' },
                { id: 'email', type: 'email', label: 'E-mail', placeholder: 'Digite seu e-mail' },
                { id: 'password', type: 'password', label: 'Senha', placeholder: 'Digite sua senha' },
                { id: 'confirmPassword', type: 'password', label: 'Confirme sua Senha', placeholder: 'Confirme sua senha' },
                { id: 'cpf', type: 'text', label: 'CPF', placeholder: 'Digite seu CPF' },
                { id: 'birthdate', type: 'date', label: 'Data de Nascimento' },
                { id: 'cidade', type: 'text', label: 'Cidade', placeholder: 'Digite sua cidade' },
                { id: 'estado', type: 'text', label: 'Estado', placeholder: 'Digite seu estado' },
                { id: 'endereco', type: 'text', label: 'Endereço', placeholder: 'Digite seu endereço' },
              ].map((input) => (
                <div key={input.id} className="input-box">
                  <label htmlFor={input.id}>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} required />
                </div>
              ))}
              <div className="input-box">
                <label htmlFor="tipo-usuario">Tipo de Usuário</label>
                <select id="tipo-usuario" required>
                  <option value="">Selecione o tipo de usuário</option>
                  <option value="jogador">Jogador</option>
                  <option value="administrador">Administrador de Quadra</option>
                </select>
              </div>
            </div>
            <button type="button" className="continue-button">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
