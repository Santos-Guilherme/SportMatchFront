import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PoliticaDePrivacidade() {
    return (
        <div className='PoliticaDePrivacidade'>
            <Header />
            <section className='secao1'>
                <h1>Política de Privacidade</h1>
            </section>
            <section className='secao2'>
                <div>
                    <p>Última atualização: 07/11/2024</p>
                    <h2>1. Coleta de Informações</h2>
                    <p>
                        Coletamos informações pessoais, como nome, e-mail, telefone, e localização, além de dados de uso e localização para melhorar os serviços oferecidos.
                    </p>
                </div>
                <div>
                    <h2>2. Uso das Informações</h2>
                    <p>
                        Utilizamos os dados para fornecer serviços, melhorar a plataforma e enviar notificações, quando autorizado.
                    </p>
                </div>
                <div>
                    <h2>3. Compartilhamento de Informações</h2>
                    <p>
                        Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para o funcionamento do serviço ou exigido por lei.
                    </p>
                </div>
                <div>
                    <h2>4. Segurança dos Dados</h2>
                    <p>
                        Implementamos medidas de segurança para proteger suas informações, lembrando que nenhum sistema de dados é 100% seguro.
                    </p>
                </div>
                <div>
                    <h2>5. Direitos do Usuário</h2>
                    <p>
                        Você pode acessar, corrigir ou excluir seus dados a qualquer momento.
                    </p>
                </div>
                <div>
                    <h2>6. Atualizações do Termo de Privacidade</h2>
                    <p>
                        Podemos atualizar este termo periodicamente, informando os usuários por e-mail ou na plataforma.
                    </p>
                </div>
                <div>
                    <h2>7. Contato</h2>
                    <p>
                        Para dúvidas sobre privacidade, entre em contato pelo e-mail: suportesportmatch@gmail.com.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
