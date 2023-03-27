import { Stack } from "react-bootstrap"
import { UseCartContext } from "../contextApi/CartContext"
import productsData from '../data/productsData.json'

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = UseCartContext()
    const product = productsData.find(product => product.id === id)

    if(product == null) {
        return null
    }
    return (
        <Stack direction="horizontal" gap={2}>
                <img src={product.thumbnail} style={{width: "130px", height: "80px", objectFit: "cover"}} />
        </Stack>
    )

}