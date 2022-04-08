import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import shiba from '../img/shiba.png';
 

export default function Navbars() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img src={shiba} alt="Shiba Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Servicios</Nav.Link>
                <Nav.Link href="/">Productos</Nav.Link>
                <Nav.Link href="/">Sobre nosotros</Nav.Link>
                <Nav.Link href="/">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    );
}