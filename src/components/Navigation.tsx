import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import '../style.css'


export const Navigation = () => {
  return (
    <Navbar className='bg-light shadow-sm mb-3' sticky='top'>
      <Container>
        <Navbar.Brand href='/'>
          BuyWithGlade
        </Navbar.Brand>

        <Nav className='justify-content-center' activeKey="/">
          <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
          <Nav.Link to='/products' as={NavLink}>Products</Nav.Link>
          <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
        </Nav>

        <Button variant='outline-success' className='rounded-circle' style={{position: "relative", width: '3rem', height:"3rem"}}>
            <FaShoppingCart size={25} className='text-dark' />
            <span className='text-white  d-flex justify-content-center align-items-center rounded-circle' 
            style={{ 
              position: 'absolute', 
              backgroundColor: 'red',
              top: 0,
              right: 0,
              width: '22px',
              height: '22px',
              fontSize: '11px',
              transform: 'translate(-5%, 15%)'
              }}>3</span>
        </Button>
      </Container>
    </Navbar>
  )
}
