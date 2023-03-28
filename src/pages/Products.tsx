import ProductsList from '../data/productsData.json'
import {Row, Col, Card, Button} from 'react-bootstrap'
import { currency } from '../currencyFormatter/currency'
import { UseCartContext } from '../contextApi/CartContext'

type ProductType = {
  id: number,
  thumbnail: string,
  title: string,
  price: number,
  description: string
}

type ProductPropId = {
  id?: number | any
}
export const Products = ({id}: ProductPropId) => {

  //consumed the useCartContext
  const {fetchQuantity, increOrAddToCart} = UseCartContext()
  
 //declare a variable quantity and set it to 0 inorder to conditionally render the "add to cart" button
 const quantity = fetchQuantity(id)
  return (
    <div>
    <div>Products</div>
        <Row md={2} xs={1} sm={2} lg={3} className='g-4'>
      {ProductsList.map((product: ProductType) => (
        <Col key={product.id}> 
          <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={product.thumbnail}  style={{objectFit: 'cover', height: '200px'}} />
            <Card.Body className='d-flex flex-column '>
              <Card.Title className='d-flex justify-content-between align-items-baseline mb-2'>
                  <h3 style={{fontSize: "20px"}}>{product.title}</h3>
                  <span className='ml-3 text-muted ' style={{fontSize: "18px"}}>
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
                  
                )}
              </div>
            </Card.Body>
          </Card>
          
        </Col>
      ))}
    </Row>
  </div>

  )
}
