import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import './navbar.css';
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#home'>About</a></p>
  <p><a href='#home'>Services</a></p>
  <p><a href='#home'>Contact Us</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" color='black' width='250' height='62.50'/>
        </div>
      <div className="navbar-links">
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-menu'>
       <Hamburger color="#fff" size={27} toggled={toggleMenu} toggle={setToggleMenu} />
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar