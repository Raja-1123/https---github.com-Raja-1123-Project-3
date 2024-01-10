import React from 'react'
import logo from './images/logo.png'
import './navigation.css'

const Navigation = () => {
  return (
    <nav className='container'>
      <div className='logo '>
        <img src={logo} height='72px' width='72px' />
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation