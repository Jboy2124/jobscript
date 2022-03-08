import React from 'react'
import '../css/navbar.css'
import logo from '../images/logo2.gif'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Meet the Team</a></li>
                <li><a href="#">Connect</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar