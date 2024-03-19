import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink activeClassName="active" exact to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/User" className="nav-link">
        User Page
      </NavLink>
      <NavLink activeClassName="active" to="/Posts" className="nav-link">
        Posts Page
      </NavLink>
      <NavLink activeClassName="active" to="/Todos" className="nav-link">
        Todos Page
      </NavLink>
    </nav>
  );
};

export default Navbar;
