import React from 'react'
import { Card, Button, Nav, Row, Col, Container} from 'react-bootstrap'
import { UseCartContext } from '../contextApi/CartContext'
import { currency } from '../currencyFormatter/currency'
import productsData from '../data/productsData.json'
import {NavLink} from 'react-router-dom'

type HomeProps = {
  id?: number,
}

export const Home = ({id}: HomeProps) => {

      const {increOrAddToCart} = UseCartContext()

  return (
    <div>
      <h4 className='text-center' style={{margin: "1.5rem"}}>Buy with Glade</h4>
      <Container>
        <Row className='justify-content-center g-4'>
          <Col md={6} lg={4} className='mb-4'>
              <Card className="h-100">
                  <Card.Img variant="top" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/0645102/1.jpg?9227" style={{objectFit: 'cover', height: '200px'}} />
                  <Card.Body className='d-flex flex-column '>
                    <Card.Title className='d-flex justify-content-between align-items-baseline mb-2'>
                        <h3 style={{fontSize: "20px"}}>iPhone 14</h3>
                        <span className='ml-3 text-muted ' style={{fontSize: "18px"}}>
                          {currency(949)}
                        </span>
                    </Card.Title>
                    <Card.Text>An apple mobile which is nothing like apple</Card.Text>
                    
                    <div className="mt-auto ">
                        <Button className='w-100' variant='success'onClick={()=> increOrAddToCart(productsData[0].id)} >ADD TO CART</Button>
                    </div>
                  </Card.Body>
              </Card>       
          </Col>

          <Col md={6} lg={4} className='mb-4'>
              <Card  className="h-100 ">
                <Card.Img variant="top" src= "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/0532231/1.jpg?2347" style={{objectFit: 'cover', height: '200px'}} />
                <Card.Body className='d-flex flex-column '>
                  <Card.Title className='d-flex justify-content-between align-items-baseline mb-2'>
                      <h3 style={{fontSize: "20px"}}>iPhone X</h3>
                      <span className='ml-3 text-muted ' style={{fontSize: "18px"}}>
                        {currency(899)}
                      </span>
                  </Card.Title>
                  <Card.Text>SIM-Free, Model A19211 6.5-inch Super Retina HD di…lay with OLED technology A12 Bionic chip with ...</Card.Text>
                  
                  <div className="mt-auto ">
                      <Button className='w-100' variant='success'onClick={()=> increOrAddToCart(productsData[1].id)} >ADD TO CART</Button>
                  </div>
                </Card.Body>
              </Card>              
          </Col>
        </Row>
      </Container>
    <div className='d-flex flex-row justify-content-center' style={{marginTop: "1.5rem"}}>
        <Button className='w-40' variant='outline-success'onClick={()=> increOrAddToCart(productsData[1].id)} >
          <Nav.Link to='/products' as={NavLink}>View more Products</Nav.Link>
        </Button>
    </div>
  </div>
  )
}
