import { createContext, ReactNode, useContext, useState } from "react"
import { CartList } from "../components/CartList"

//Defining the type of props to be passed to the CartProvider
type CartProp ={
    children: ReactNode
}
//Defining the type for the shopping cart functionality
type CartContextType = {
    //Defining the type for the shopping cart functionality
    fetchQuantity: (id: number) => number,
    removeFromCart: (id: number) => void,
    increOrAddToCart: (id: number) => void,
    decreQuantity: (id: number) => void,

    //defining the function responsible for the cart navbar
    openCart : () => void
    closeCart : () => void
    //total no of products in the cart
    cartTotalQuantity: number
    cartProduct: CartProductType[]

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
    const [isOpen, setIsOpen] = useState(false)

    // Declaring the functions for the shopping cart functionality
    const fetchQuantity = (id: number) => {
        return cartProduct.find(product => product.id === id)?.quantity || 0
    }

    const removeFromCart = (id: number) => {
       return setCartProduct(curr => curr.filter(product => product.id !== id))
    }

    const increOrAddToCart = (id: number) => {
        setCartProduct(curr => {
          if (curr.find(product => product.id === id) == null){
              return [...curr, {id, quantity: 1}];
          }else {
              return curr.map((product) => {
                if(product.id === id){ 
                    console.log(id)
                    return {...product, quantity: product.quantity + 1};
                } else{
                    return product               
                }
                })           
          }
        });
      };

    const decreQuantity = (id: number) => {
        setCartProduct(curr => curr.find(product => product.id === id)?.quantity === 1 ? curr.filter(product => product.id !== id) : curr.map(product => {
            if (product.id === id) {
                return {...product, quantity: product.quantity - 1}
            }
            return product
        }))
    }


    //Declaring the cart nav functions
    const openCart = () => {
        setIsOpen(true)
    }

    const closeCart = () => {
        setIsOpen(false)
    }
    const cartTotalQuantity = cartProduct.reduce((quantity, item) => item.quantity + quantity, 0)


return <ContextCreated.Provider value={{
        fetchQuantity,
        removeFromCart, 
        increOrAddToCart,
        decreQuantity,
        openCart,
        closeCart,
        cartProduct,
        cartTotalQuantity
         }}>
            <CartList isOpen={isOpen}/>
        {children}
    </ContextCreated.Provider>
}