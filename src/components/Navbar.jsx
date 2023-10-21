import React from 'react'
import logo from "../assets/pizzaLogo.png"
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='rightSide'>
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/content"> Content</Link>
      </div>
    </div>
  )
}

export default Navbar
