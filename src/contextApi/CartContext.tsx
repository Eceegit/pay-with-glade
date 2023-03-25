import { createContext, ReactNode, useContext, useState } from "react"

//Defining the type of props to be passed to the CartProvider
type CartProp ={
    children: ReactNode
}
//Defining the type for the shopping cart functionality
type CartContextType = {
    fetchQuantity: (id: number) => number,
    removeFromCart: (id: number) => void,
    increOrAddToCart: (id: number) => void,
    decreQuantity: (id: number) => void,
}

//Defining the type for the useState cart products
type CartProductType = {
    id: number,
    quantity: number
}

// Creating a Context API and assigning an empty object to it and defining its type
const ContextCreated = createContext({} as CartContextType)


//Consuming the created context
export const UseCartContext =()=>{
    return useContext(ContextCreated)
}

//Adding a provider for easy rendering of the shopping cart and passing its children as props
export const CartProvider = ({children} :CartProp)=> {

    // Setting useState hook for the cart functionality
    const [cartProduct, setCartProduct] = useState<CartProductType[]>([])

    // Declaring the functions for the shopping cart functionality
    const fetchQuantity = (id: number) => {
        return cartProduct.find(product => product.id === id)?.quantity || 0
    }

    const removeFromCart = (id: number) => {
       return setCartProduct(prev => prev.filter(product => product.id !== id))
    }

    const increOrAddToCart = (id: number) => {
        setCartProduct(prev => {
            return prev.find(product => product.id === id) ? prev.map(product => {
                if (product.id === id) {
                    return {...product, quantity: product.quantity + 1}
                }
                return product
            }) : [...prev, {id, quantity: 1}]
        })
    }

    const decreQuantity = (id: number) => {
        setCartProduct(prev => prev.find(product => product.id === id)?.quantity === 1 ? prev.filter(product => product.id !== id) : prev.map(product => {
            if (product.id === id) {
                return {...product, quantity: product.quantity - 1}
            }
            return product
        }))
    }

    return <ContextCreated.Provider value={{fetchQuantity,removeFromCart, increOrAddToCart, decreQuantity}}>
        {children}
    </ContextCreated.Provider>
}