import { useContext, useState } from 'react'
import './App.css'
import { data } from './assets/data'
import Navbar from './Components/Navbar'
import ProductPage from './Components/ProductPage'
import Cart from './Components/Cart'
import { ThemeContext } from './context/ThemeContext'
function App() {
  const {theme,setTheme}=useContext(ThemeContext)

  return (
    <>
      <div style={{backgroundColor:theme ? 'black' : 'white' ,color:theme ? 'white' : 'black'}}>
        <Navbar/>
        <ProductPage/>
        <Cart/>
      </div>
    </>
  )
}

export default App
