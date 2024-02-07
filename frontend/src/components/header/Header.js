import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>CRUD app</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>DashBoard</Nav.Link>
            <Nav.Link as={Link} to='/user'>Post User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
