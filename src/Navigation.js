import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your stylesheet

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/checkout" className="nav-link">
            Checkout
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/auth" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
