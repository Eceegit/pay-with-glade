import { Button, Row, Stack } from "react-bootstrap"
import { UseCartContext } from "../contextApi/CartContext"
import { currency } from "../currencyFormatter/currency"
import productsData from '../data/productsData.json'

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart,decreQuantity,increOrAddToCart} = UseCartContext()
    const product = productsData.find(product => product.id === id)

    if(product == null) {
        return null
    }
    return (
        <Stack  direction='horizontal' gap={3}>
                <img src={product.thumbnail} style={{width: "130px", height: "80px", objectFit: "cover"}} />

                <div className="ms-auto">
                    <div style={{fontSize:"1rem"}}>
                        {product.title} {" "} {quantity > 1 && <span className="text-muted" style={{fontSize:"0.7rem"}}>x{quantity}</span>}
                    </div>

                    <div className="text-muted" style={{fontSize: '0.8rem'}}>{currency(product.price)}</div>
                </div>

                <div className='d-flex flex-row justify-content-center align-items-center  ' >
                      <Button variant="outline-success" onClick={()=> decreQuantity(product.id)}>-</Button>
                      <span className='mx-2'>{quantity} in cart</span>
                      <Button variant="outline-success" onClick={()=> increOrAddToCart(product.id)}>+</Button>
                </div>
                

                <Button variant="outline-danger"  onClick={() => removeFromCart(product.id)}>x</Button>
        </Stack>
    )

}