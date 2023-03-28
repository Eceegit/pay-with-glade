import { Offcanvas, Stack } from "react-bootstrap"
import { UseCartContext } from "../contextApi/CartContext"
import { currency } from "../currencyFormatter/currency"
import { CartItem } from "./CartItem"
import productsData from '../data/productsData.json'
import GladePayment from '../payment/GladePayment'

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

                            <div className="ms-auto fs-6 fw-bold">
                                Total: {currency(cartProduct.reduce((total, cartProduct) => {
                                    const product = productsData.find(product => product.id ===  cartProduct.id)
                                    return total + (product?.price|| 0) * cartProduct.quantity
                                }, 0))}
                            </div>

                            <GladePayment />
                        </Stack>

                    </Offcanvas.Body>
                </Offcanvas>
            </div>
    )
}