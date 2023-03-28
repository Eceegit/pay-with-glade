import ProductsList from '../data/productsData.json'
import {Row, Col, Card, Button} from 'react-bootstrap'
import { currency } from '../currencyFormatter/currency'
import { UseCartContext } from '../contextApi/CartContext'

type ProductType = {
  id: number,
}
export const Products = ({id}: ProductType) => {

  //consumed the useCartContext
  const {fetchQuantity,removeFromCart, increOrAddToCart, decreQuantity} = UseCartContext()
  
 //declare a variable quantity and set it to 0 inorder to conditionally render the "add to cart" button
 const quantity = fetchQuantity(id)
  return (
    <div>
    <div>Products</div>
        <Row md={2} xs={1} sm={2} lg={3} className='g-4'>
      {ProductsList.map((product) => (
        <Col key={product.id}> 
          <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={product.thumbnail}  style={{objectFit: 'cover', height: '160px'}} />
            <Card.Body className='d-flex flex-column '>
              <Card.Title className='d-flex justify-content-between align-items-baseline mb-2'>
                  <h3>{product.title}</h3>
                  <span className='ml-3 text-secondary'>
                    {currency(product.price)}
                  </span>
              </Card.Title>
              <Card.Text>{product.description}</Card.Text>
              
              {/* conditionally render the "add to cart" button */}
              <div className="mt-auto ">
                {quantity === 0 ? (
                  <Button className='w-100' variant='success'onClick={()=> increOrAddToCart(product.id)} >ADD TO CART</Button>
                  ): ( 
                  <Button className='w-100' variant='success'onClick={()=> increOrAddToCart(product.id)} >ADDED TO CART</Button>
                  // <div className='d-flex flex-column align-items-center'>
                  //   <div className='d-flex flex-row justify-content-center align-items-center ' >
                  //     <Button variant="outline-success" onClick={()=> decreQuantity(product.id)}>-</Button>
                  //     <span className='mx-2'>{quantity} in cart</span>
                  //     <Button variant="outline-success" onClick={()=> increOrAddToCart(product.id)}>+</Button>
                  //   </div>
                  
                  //     <Button variant="danger" className='mt-2' onClick={()=> removeFromCart(id)}>Remove</Button>
                  // </div>
                )}
              </div>
            </Card.Body>
          </Card>
          
        </Col>
      ))}
    </Row>
  </div>








    // <div>
    //     <div>Products</div>
    //     <Row>
    //         {productsData.map(product => ( 
    //             <Col>{{product}}</Col>
                
    //         ))}
    //     </Row>
    // </div>
  )
}
