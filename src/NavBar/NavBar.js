import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav-container' id="navbar">
      <Link className='web-name' to='/'>SHIPROCKET</Link>
      <div className='nav-item'>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/distance-calculator">Distance</Link>
        <Link className="nav-item" to="/shipper-data">Shipping Data</Link>
        <Link className="nav-item" to="/g-complete">Areas</Link>
      </div>
      <Link className="contact-btn" to="/#services">Services</Link>
    </div>
  )
}

export default NavBar;