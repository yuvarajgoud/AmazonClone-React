import { useContext } from "react"
import Product from "./Product"
import './ProductPage.css'
import { ProductContext } from "../context/ProductContext"
export default function ProductPage(){

  const {products,setProducts}=useContext(ProductContext);
  return (
    <>
    <div className="container">
      {
        products.map((product,key)=>(
          <Product
            key={key}
            id={product.id}
            name={product.productName}
            price={product.price}
            imageUrl={product.image}
          />
        ))
      }
    </div>
    </>
  )
}