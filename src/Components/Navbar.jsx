import { useContext } from 'react'
import './Navbar.css'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar(){
  const {theme,setTheme}=useContext(ThemeContext)

  function handleTheme(){
    setTheme(!theme)
  }
  return (
    <>
    <div className="nav-container">
      <h2>Amazon</h2>
      <div className="search">
        <input type="text" placeholder="Search"/>
        <span> 🔍</span>
      </div>
      <div className="orders-cart">
        <button onClick={handleTheme}>{theme ? '☀️':'🌑'}</button>
        <h3>Orders</h3>
        <h3>Cart</h3>
      </div>
    </div>
    </>
  )
}