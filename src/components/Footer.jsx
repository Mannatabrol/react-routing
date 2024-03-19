import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer>
        <NavLink activeClassName="red" exact to="/" style={{ color: 'orange', textDecoration: 'none' }}>
          <li>Home-Info</li>
        </NavLink>
        <NavLink activeClassName="red" to="/User" style={{ color: 'orange', textDecoration: 'none' }}>
          <li>User Page-Data</li>
        </NavLink>
        <NavLink activeClassName="red" to="/Posts" style={{ color: 'orange', textDecoration: 'none' }}>
          <li>Posts Page-Data</li>
        </NavLink>
        <NavLink activeClassName="red" to="/Todos" style={{ color: 'orange', textDecoration: 'none' }}>
          <li>Todos Page-lists</li>
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;
