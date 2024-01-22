import './index.css'
import logo from '../../assets/Images/logo.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <div className="header">
      <div className="menu-bar">
        <nav className={`navbar navbar-fixed-top navbar-expand-lg navbar-light ${navbarVisible ? 'active' : ''}`}>
          <Link to='/' className="navbar-brand"><img src={logo} alt="LOGO" /></Link>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <i className="fa fa-bars"></i>
          </button>
          <div className={`navbar-collapse ${navbarVisible ? 'show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/men' className="nav-link">Men</Link>
              </li>
              <li className="nav-item">
                <Link to='/women' className="nav-link">Women</Link>
              </li>
              <li className="nav-item">
                <Link to='/kids' className="nav-link">Kids</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className="nav-link" ><i className="fa-solid fa-cart-shopping"></i></Link>
              </li>
              <li className="nav-item">
                <Link to='/signup' className="nav-link" ><i className="fa-solid fa-circle-user"></i></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
