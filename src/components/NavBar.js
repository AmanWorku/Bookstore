import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
    <span className="material-icons primary-color">person</span>
  </nav>
);
export default NavBar;
