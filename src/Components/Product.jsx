import { CartContext } from '../context/CartContext';
import './Product.css'
import { useContext, useState } from 'react';
export default function Product({id,name,price,imageUrl}){
  const {cartItems,setCartItems}=useContext(CartContext)
  const [quantity,setQuantity]=useState(1);
  function handleDropdownChange(e){
    setQuantity(Number(e.target.value))
  }
  function handleAdd(){

    const newArray=cartItems.filter((item)=>{
      return item.id===id
    })
    if(newArray.length === 0){
      setCartItems([{
        productName :name,
        id:id,
        price:price,
        image:imageUrl,
        quantity:quantity
      },...cartItems])
    } else {
      const newCartItems=cartItems.map((item)=>{
        if(item.id===id){
          return {...item , quantity:item.quantity+quantity}
        } else {
          return item
        }
      })
      setCartItems(newCartItems)
    }
  }
  

  return (
    <>
    <div className="product-container">
      <img src={imageUrl} alt="" />
      <p className="name">{name}</p>
      <p className="rating">Rating : ★★★★☆</p>
      <p className="price">${price}</p>
      <select name="" value={quantity} onChange={handleDropdownChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
    </>
  )
}