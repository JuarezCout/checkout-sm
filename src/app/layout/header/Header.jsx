import React from 'react'
import './Header.css'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Supermercado IZI</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#carrinho">Carrinho</Nav.Link>
                <Nav.Link href="#promocao">Promoções</Nav.Link>
            </Nav>
        </Navbar>
    )
}