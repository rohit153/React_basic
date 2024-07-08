import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './nav-bar.css'; // Import custom CSS for navbar styling

function NavScroll() {
    return (
        <Navbar expand="lg" className="custom-navbar bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/" style={{ fontWeight: 'bold' }}>Hospital Management</Navbar.Brand>                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Services-Contact" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/action1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/action2">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/action3">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" style={{ marginRight: '10px' }}>
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;
