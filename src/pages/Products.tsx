import React, { useEffect, useState } from 'react'
import productsData, {Product} from '../data/productsData'
import {Row, Col, Card} from 'react-bootstrap'


export const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMount: Product[] = await productsData();
        console.log('dataMount:', dataMount);
        setProducts(dataMount);
        setLoading(false);
        console.log('products', products);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    
  },[])

  


  return (
    <div>
    <div>Products</div>
      {loading ? (
        <div>Loading</div>
      ): products.length > 0 ? (
        <Row>
      {products.map((product) => (
        <Col key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{`$${product.price}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      ) : <div>No products</div>}
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
