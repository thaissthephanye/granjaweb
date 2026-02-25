import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Home.css';
import Carrossel from '../components/Carrossel';
import CardApresentacao from '../components/CardApresentacao';

function Home() {
    const cards = [
        {
            titulo: '🚀 Tecnologia Avançada',
            texto: 'Sistemas automatizados para monitoramento e controle dos galpões, garantindo o melhor ambiente para seus frangos.',
            imagem: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80'
        },
        {
            titulo: '🐔 Bem-Estar Animal',
            texto: 'Ambientes controlados com temperatura, ventilação e alimentação adequadas para o desenvolvimento saudável dos frangos.',
            imagem: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80'
        },
        {
            titulo: '📊 Gestão Eficiente',
            texto: 'Controle total sobre recursos, responsáveis e equipamentos, otimizando a produção e reduzindo custos.',
            imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80'
        }
    ];

    return (
        <div className="home-page">
            <Carrossel />

            <Container className="home-content">
                <div className="welcome-section">
                    <h1 className="welcome-title">Bem-vindo à GranjaWeb</h1>
                    <p className="welcome-text">
                        A solução completa para o gerenciamento inteligente da sua granja de frangos.
                        Controle todos os aspectos da produção com tecnologia de ponta e facilidade.
                    </p>
                </div>

                <div className="features-section">
                    <h2 className="section-title">Nossas Soluções</h2>
                    <Row>
                        {cards.map((card, index) => (
                            <CardApresentacao
                                key={index}
                                titulo={card.titulo}
                                texto={card.texto}
                                imagem={card.imagem}
                            />
                        ))}
                    </Row>
                </div>

                <div className="stats-section">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Granjas Atendidas</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2M+</span>
                        <span className="stat-label">Frangos Monitorados</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Satisfação</span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;