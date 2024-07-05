import React from 'react'
import '../styles/css/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='leftmost'>SmartLab</div>
        <div className='middle'></div>
        <div className='rightmost'>
          <button className='linkButton'>Features</button>
          <button className='linkButton'>Log In</button>
          <button className='linkButton'>About Us</button>
        </div>
      </div>
    </div>
  )
}
