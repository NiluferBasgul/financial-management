import React from 'react';
import './Navbar.css';

const Navbar = () => {
 return (
    <div className="navbar">
      <a href="#" className="navbar-link">Login</a>
      <a href="#" className="navbar-link">Signup</a>
      <a href="mailto:your@email.com" className="navbar-link">Contact</a>
    </div>
 );
}

export default Navbar;
