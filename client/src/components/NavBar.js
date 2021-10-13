import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default  function Navigation = () => {
  <NavLink to="/">
Our Mission
</NavLink>
<NavLink to="/profile">
  Profile
</NavLink>
<NavLink to="/Gratefulpage">
  GratefulPage
</NavLink>
<NavLink to="/CoinitPage" to="/" >
Coin it</NavLink>
  return (
    <Navbar variant="dark" className="nav-bar">
      <Container>
        <Navbar.Brand href={user && authenticated ? '/user' : '/'}>
          <img
            src={logo}
            width="120"
            height="30"
            margin-right="30"
            alt=""
            margin-top="20"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {authenticated && user ? authenticatedOptions : publicOptions}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
