import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function EsqueceuSenha() {
    const [email, setEmail] = useState('');
 

    return (
        <div className="ForgotPassword">
            <div className="container">
                <div className="form">
                    <h1>Esqueceu a senha?</h1>
                    <form >
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            Enviar
                        </button>
                    </form>
                    <p>
                        <Link to="/login" className="back-to-login">
                            Voltar para o login
                        </Link>
                    </p>
                </div>
                <div className="form-image">
                    <Link to='/'>
                        <img
                            src="/assets/images/SportMatch-removebg-preview.png"
                            alt="Esqueceu a senha"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

