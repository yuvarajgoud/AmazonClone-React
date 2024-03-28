import { createContext,useState } from "react";

export const CartContext=createContext(null)


export function CartProvider(props){

    const [cartItems,setCartItems]=useState([])

    // console.log(cartItems)
    return (
      <CartContext.Provider value={{cartItems,setCartItems}}>
        {props.children}
      </CartContext.Provider>
    )
}