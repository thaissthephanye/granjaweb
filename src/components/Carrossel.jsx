import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrossel.css';

function Carrossel() {
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1604848698035-8c3c1934c78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
            title: "Granja Moderna",
            description: "Tecnologia e inovação na criação de frangos"
        },
        {
            image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
            title: "Galpões Inteligentes",
            description: "Automação e controle total do ambiente"
        },
        {
            image: "https://images.unsplash.com/photo-1529903382171-4d4e23ba396f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
            title: "Bem-Estar Animal",
            description: "Conforto e saúde para seus frangos"
        }
    ];

    return (
        <Carousel className="custom-carousel">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={slide.image}
                        alt={slide.title}
                    />
                    <Carousel.Caption className="carousel-caption-custom">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Carrossel;