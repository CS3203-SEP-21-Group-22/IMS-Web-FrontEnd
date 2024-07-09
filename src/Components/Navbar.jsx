import React from 'react'
import '../styles/css/Navbar.css'
import '../styles/css/palette.scss'
import '../styles/css/palette.css'
import logo from '../styles/images/logo.png'


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='leftmost'><img src={logo} alt='logo' className='logo'/></div>
        <div className='middle'></div>
        <div className='rightmost'>
          <button className='contact-us'>CONTACT US</button>
          <button className='login'>LOGIN</button>
        </div>
      </div>
    </div>
  )
}
