import React from 'react'
import '../styles/css/Navbar.css'
import '../styles/css/palette.scss'
import '../styles/css/palette.css'
import logo from '../styles/images/logo.png'
import { Link,useLocation } from 'react-router-dom'
import walrus from '../styles/images/walrus.png'


export const Navbar = () => {

  const location = useLocation();

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='leftmost'><Link to='/'><img src={logo} alt='logo' className='logo'/></Link></div>
        <div className='middlemost'></div>
        <div className='rightmost'>
          <button className='contact-us'>CONTACT US</button>
          {location.pathname == '/' && (
            <Link to='/sign-in' className='login'>LOGIN</Link>
          )}
          {location.pathname == '/student' && (
            <img src={walrus} className='walrus'/>
          )}
          
        </div>
      </div>
    </div>
  )
}
