import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand-logo">
                    🐔 GranjaWeb
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-link-custom">
                            <span className="nav-icon">🏠</span> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/galpoes" className="nav-link-custom">
                            <span className="nav-icon">🏭</span> Galpões
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;