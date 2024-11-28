import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Sobre() {
    return (
        <div className='Sobre'>
            <Header></Header>
            <div className='Sobre-content'>
                <section className='secao1'>
                    <h1>Sobre</h1>
                </section>
                <section className='conteudo'>
                    <div className='paragrafo'>
                        <p>Na Gamp3r, nos dedicamos a desenvolver soluções que conectam pessoas, facilitam experiências e impulsionam a inovação. Com uma paixão pela tecnologia e o compromisso de resolver desafios reais, nossa missão é criar ferramentas que transformem a maneira como as pessoas interagem e organizam atividades, como a plataforma Sportsmatch.</p>
                    </div>
                    <div className='paragrafo'>
                        <p>Mais do que uma equipe de desenvolvedores, somos visionários e entusiastas do esporte e da tecnologia, unidos pelo desejo de promover a conectividade e a organização no dia a dia. Acreditamos que a tecnologia tem o poder de aproximar as pessoas e tornar a vida mais prática, e trabalhamos incansavelmente para materializar essa visão em cada projeto.</p>
                    </div>
                    <div className='paragrafo'>
                        <p>Nossa equipe conta com profissionais especializados em diversas áreas, desde design e desenvolvimento até gestão e estratégia. Cada integrante traz uma perspectiva única, o que nos permite criar soluções inovadoras e adaptadas às necessidades de nossos usuários e parceiros.</p>
                    </div>
                    <div className='paragrafo'>
                        <p>Com a plataforma Sportsmatch, queremos transformar a experiência de organizar e participar de eventos esportivos. Buscamos oferecer uma plataforma intuitiva, prática e segura, que facilite desde a reserva de quadras até a formação de equipes e organização de partidas amadoras de forma acessível para todos.</p>
                    </div>
                    <div className='paragrafo'>
                        <p>Na Gamp3r, estamos sempre atentos às últimas tendências tecnológicas e focados em aprimorar nossos projetos, desde o desenvolvimento inicial até o suporte contínuo. Acreditamos em relações de confiança e transparência com nossos usuários e parceiros, e estamos comprometidos em oferecer soluções que realmente fazem a diferença.</p>
                    </div>
                    <div className='paragrafo'>
                        <p>Seja bem-vindo à nossa jornada. A Gamp3r é feita para inovar e melhorar a forma como organizamos nossas atividades cotidianas. Junte-se a nós e descubra como a tecnologia pode transformar a sua experiência esportiva com a Sportsmatch.</p>
                    </div>
                </section>
            </div >
            <Footer></Footer>
        </div>
    );
}
