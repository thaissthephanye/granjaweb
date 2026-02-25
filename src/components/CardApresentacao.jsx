import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CardApresentacao.css';

function CardApresentacao({ titulo, texto, imagem }) {
    return (
        <Col md={4}>
            <Card className="custom-card h-100">
                <div className="card-image-container">
                    <Card.Img
                        variant="top"
                        src={imagem}
                        className="card-image"
                    />
                </div>
                <Card.Body className="card-body-custom">
                    <Card.Title className="card-title">{titulo}</Card.Title>
                    <Card.Text className="card-text">{texto}</Card.Text>
                </Card.Body>
                <div className="card-footer-custom">
                    <span className="read-more">Saiba mais →</span>
                </div>
            </Card>
        </Col>
    );
}

export default CardApresentacao;