import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import '../App.css'

export const Layout = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
