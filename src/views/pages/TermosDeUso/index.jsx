import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermosDeUso() {
    return (
        <div className='TermosDeUso'>
            <Header></Header>
            <div className='TermosDeUso-content'>
                <section className='secao1'>
                    <h1>Termos de Uso</h1>
                </section>
                <section className='secao2'>
                    <div>
                        <p>Última atualização: 05/10/2024</p>
                        <h2>1. Aceitação dos Termos</h2>
                        <p>
                            Ao criar uma conta ou utilizar os serviços oferecidos pela SportMatch, você aceita e concorda com estes Termos de Uso, bem como com nossa Política de Privacidade.
                        </p>
                    </div>
                    <div>
                        <h2>2. Descrição dos Serviços</h2>
                        <p>
                            A SportMatch é uma plataforma que conecta usuários interessados em encontrar partidas esportivas e reservar quadras para a prática de esportes coletivos.
                        </p>
                    </div>
                    <div>
                        <h2>3. Cadastro e Conta</h2>
                        <p>
                            Para utilizar os serviços oferecidos, você precisará criar uma conta fornecendo informações precisas e atualizadas.
                        </p>
                    </div>
                    <div>
                        <h2>4. Responsabilidade dos Usuários</h2>
                        <p>
                            Os usuários devem obedecer a todas as leis aplicáveis e manter um comportamento respeitoso com outros participantes.
                        </p>
                    </div>
                    <div>
                        <h2>5. Política de Cancelamento</h2>
                        <p>
                            Os usuários devem respeitar as regras de cancelamento e alteração de reservas de quadras ou partidas.
                        </p>
                    </div>
                    <div>
                        <h2>6. Limitação de Responsabilidade</h2>
                        <p>
                            SportMatch não se responsabiliza por: a precisão das informações fornecidas por usuários ou cancelamentos de partidas organizadas por terceiros.
                        </p>
                    </div>
                    <div>
                        <h2>7. Conteúdo do Usuário</h2>
                        <p>
                            Os usuários podem compartilhar conteúdo no site, mas devem garantir que ele não infrinja direitos de terceiros.
                        </p>
                    </div>
                    <div>
                        <h2>8. Modificações nos Termos de Uso</h2>
                        <p>
                            SportMatch pode modificar os Termos de Uso a qualquer momento, com notificações via e-mail ou na plataforma.
                        </p>
                    </div>
                    <div>
                        <h2>9. Privacidade</h2>
                        <p>
                            Para mais detalhes, consulte nossa Política de Privacidade.
                        </p>
                    </div>
                    <div>
                        <h2>10. Contato</h2>
                        <p>
                            Para dúvidas, entre em contato pelo e-mail: suportesportmatch@gmail.com.
                        </p>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}
