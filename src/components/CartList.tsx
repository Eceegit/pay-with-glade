import { Offcanvas, Stack } from "react-bootstrap"
import { UseCartContext } from "../contextApi/CartContext"
import { CartItem } from "./CartItem"

type CartListProp = {
    isOpen: boolean
}
export function CartList({isOpen}: CartListProp) {

        const {closeCart,cartProduct} = UseCartContext()

    return (
            <div>
                <Offcanvas show={isOpen} onHide={closeCart} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Cart</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Stack gap={3}>
                            {cartProduct.map(product => ( 
                                    <CartItem key={product.id} {...product} />
                                )
                            )}
                        </Stack>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
    )
}