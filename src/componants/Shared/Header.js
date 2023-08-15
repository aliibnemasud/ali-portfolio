import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import logo from '../img/Logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='py-4' bg="" variant="light">
                <Container>
                    <Navbar.Brand href="#home"> <img src={logo} alt="" /> </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">                        
                        <Nav className='ms-auto'>
                            <Nav.Link className='text-uppercase text-dark mr-3' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#aboutme">About Me</Nav.Link>                           
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#expertise">Expertise</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#projects">Projects</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#testimonial">Testimonial</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#contact">Contact</Nav.Link>

                            <Nav.Link className='mr-3 bg-dark text-white px-3 rounded' eventKey={2} href="https://calendly.com/aliibnemasud/30min">
                                Schedule a meeting
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;