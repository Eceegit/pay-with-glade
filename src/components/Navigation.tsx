import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import '../style.css'
import { UseCartContext } from '../contextApi/CartContext';


export const Navigation = () => {
    const {openCart, cartTotalQuantity} = UseCartContext()

  return (
    <Navbar className='bg-light shadow-sm mb-3' sticky='top'>
      <Container>
        <Navbar.Brand href='/' className='fw-bold'>
          BuyWithGlade <span style={{fontSize: '20px', color: 'red'}}>.</span>
        </Navbar.Brand>

        <Nav className='justify-content-center' activeKey="/">
          <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
          <Nav.Link to='/products' as={NavLink}>Products</Nav.Link>
          <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
        </Nav>
        {cartTotalQuantity > 0 && (
          <Button variant='outline-success' className='rounded-circle' style={{position: "relative", width:       '3rem',   height:"3rem"}}
            onClick={openCart}
          >
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
                }}>{cartTotalQuantity}</span>
          </Button>

        )}
      </Container>
    </Navbar>
  )
}
