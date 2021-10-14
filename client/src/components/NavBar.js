import React from 'react'
import { Container, NavDropdown, Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#lyfebox" className="nav-barlyfe">
          LyfeBox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">LyfeBox</Nav.Link>
            <Nav.Link href="/Mission">Our Mission</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/GratefulPage">
                Grateful Page
              </NavDropdown.Item>
              <NavDropdown.Item href="CoinitPage">Coin It</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
