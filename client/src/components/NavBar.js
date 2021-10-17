import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="nav-barlyfe">
      <Container>
        <Navbar.Brand href="/">LyfeBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Mission">Our Mission</Nav.Link>
            <Nav.Link href="/Journal">Journal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
