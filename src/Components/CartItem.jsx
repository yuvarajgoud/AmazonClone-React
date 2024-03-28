
import { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../context/CartContext'

export default function CartItem({id,name,price,imageUrl,quantity}){
  
  const {cartItems,setCartItems}=useContext(CartContext)
  function handlePlus(){
    setCartItems( cartItems.map((item)=>{
      if(item.id===id){
        return {...item,quantity:item.quantity+1}
      }else {
        return item
      }
    }))
  }
  function handleMinus(){
    setCartItems( cartItems.map((item)=>{
      if(item.id===id){
        return {...item,quantity:((item.quantity!==0) ? item.quantity-1 :0)}
      }else {
        return item
      }
    }))
  }
  function handleDelete(){
    setCartItems( cartItems.filter((item)=>{
      return item.id!==id
    }))
  }

  return (
    <>
      <div className='cart-item'>
        <div className='image'>
            <img src={imageUrl} alt="" />
        </div>
        <div className='item-details'>
            <p>{name}</p>
            <p>${price}</p>
            <div className='quantity-buttons'>
              <p>Quantity :{quantity}</p>
              <button onClick={handlePlus}> + </button>
              <button onClick={handleMinus}> - </button>
              <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
      </div>
    </>
  )
}