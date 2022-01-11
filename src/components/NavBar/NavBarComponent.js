import React from 'react';
import {Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Warner Web Development</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#/">Home</Nav.Link>
        <Nav.Link href="#/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  ); 
}

export default NavBarComponent;