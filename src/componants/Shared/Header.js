import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='py-4' bg="none" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Ali Ibne Masud</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">                        
                        <Nav className='ms-auto'>
                            <Nav.Link className='text-uppercase text-dark mr-3' href="#deets">Home</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#aboutme">About Me</Nav.Link>                           
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#expertise">Expertise</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#projects">Projects</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#testimonial">Testimonial</Nav.Link>
                            <Nav.Link className='text-uppercase text-dark mr-3' eventKey={2} href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;