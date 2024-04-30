import React from 'react'
import './Navbar.css'
import logo from '../../assets/vabuchiW.png'

function Navbar() {
  return (
    <nav>
      <div className="navBar container">
        <img src={logo} alt="" className='logo'/>
        <ul>
          <li>Bosh sahifa</li>
          <li>Hizmatlar</li>
          <li>Gallireya</li>
          <li><button className='btn'>Aloqa</button></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar