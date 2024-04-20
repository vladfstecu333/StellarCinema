import React from 'react'
import logo from '../assets/images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header-left'>
      <img src={logo} id='logo'/>
      <h1 id='home'>Home</h1>
    <h1 className='right-text'>Despre noi</h1>
    <h1 className='right-text'>Contact</h1>
    <h1 className='right-text'>FAQ</h1>
    </div>
  )
}

export default Header