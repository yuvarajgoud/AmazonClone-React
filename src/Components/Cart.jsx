import { useContext,useState,useEffect } from 'react'
import './Cart.css'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
export default function Cart(){

  const {cartItems,setCartItems}=useContext(CartContext)
  const [total,setTotal]=useState(0)
  const [itemCount,setItemCount]=useState(0)

  useEffect(()=>{
      let totalAmount=0;
      let itemCount=0;
      cartItems.map((item)=>{
         totalAmount+=item.price*item.quantity
         itemCount+=item.quantity
      })
      setTotal(totalAmount)
      setItemCount(itemCount)
  },[cartItems])

  console.log(cartItems)

  const cartContainerStyle = {
    minHeight: `${100 + cartItems.length * 120}px`, // Adjust the factor (50) based on your design
    
  };
  
  return (
    <>
    <div className='cart-container' style={cartContainerStyle}>
      <div className='cart-items-container'>
        <h3>
          Review Your Orders
        </h3>
        {
          cartItems.map((item,key)=>(
            <CartItem
              key={key}
              id={item.id}
              name={item.productName}
              price={item.price}
              imageUrl={item.image}
              quantity={item.quantity}
            />
          ))
        }
      </div>
      <div className='order-summary'>
        <h3>
          Order Summary
        </h3>
        <div className='order-summary-container'>
          <div className='labels'>
            <p>Items( {itemCount} ) :</p>
            <p>Shipping :</p>
            <p>Estimated Tax :</p>
            <hr />
            <p>Order Total :</p>
          </div>
          <div className='values'>
            <p>${total.toFixed(2)}</p>
            <p>$0.00</p>
            <p>${(total*0.1).toFixed(2)}</p>
            <hr />
            <p>${(Number((total*0.1).toFixed(2))+Number(total.toFixed(2))).toFixed(2)}</p>
          </div>
        </div>
        <button>Place your Order</button>
      </div>
    </div>
    </>
  )
}