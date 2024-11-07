// pages/Registro.jsx
import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Registro() {
  return (
    <div className="Registro">
        <div>
            
        </div>
      <div className="form-image">
        <img src="/assets/images/SportMatch-removebg-preview.png" alt="Imagem de Registro" />
      </div>
      <div className="form">
        <form className="registro-form">
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button><Link to="/login">Entrar</Link></button>
            </div>
          </div>
          
          <div className="input-group">
            <div className="input-box">
              <label htmlFor="username">Usuário</label>
              <input id="username" type="text" placeholder="Digite seu usuário" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" placeholder="Digite seu e-mail" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" placeholder="Digite sua senha" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="confirmPassword">Confirme sua Senha</label>
              <input id="confirmPassword" type="password" placeholder="Confirme sua senha" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" placeholder="Digite seu CPF" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="birthdate">Data de Nascimento</label>
              <input id="birthdate" type="date" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" type="text" placeholder="Digite sua cidade" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="estado">Estado</label>
              <input id="estado" type="text" placeholder="Digite seu estado" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="endereco">Endereço</label>
              <input id="endereco" type="text" placeholder="Digite seu endereço" required />
            </div>
            
            <div className="input-box">
              <label htmlFor="tipo-usuario">Tipo de Usuário</label>
              <select id="tipo-usuario" required>
                <option value="">Selecione o tipo de usuário</option>
                <option value="jogador">Jogador</option>
                <option value="administrador">Administrador de Quadra</option>
              </select>
            </div>
          </div>
          
          <div className="continue-button">
            <button type="button">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
