import { createContext ,useState} from "react";
import { data } from "../assets/data";

export const ProductContext = createContext(null)


export const ProductProvider = (props) => {

  const [products,setProducts]=useState(data)
  return (
    <ProductContext.Provider value={{products,setProducts}}>
      {props.children}
    </ProductContext.Provider>
  )
}