import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export const Navigation = () => {
  return (
    <Navbar className='bg-light shadow-sm mb-3'>
      <Container>
        <Navbar.Brand href='/'>
          BuyWithGlade
        </Navbar.Brand>

        <Nav className='justify-content-center' activeKey="/">
          <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
          <Nav.Link to='/products' as={NavLink}>Products</Nav.Link>
          <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
        </Nav>

        <Button></Button>
      </Container>
    </Navbar>
  )
}
