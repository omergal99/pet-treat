import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from './Menu';

const NavBar = ({ currUserName }) => (
  <nav className="Nav_menu">
    <ul>
      {!currUserName &&
        <div className="link">
          <NavLink to="/"
            activeClassName="activeRoute">Sign Up</NavLink>
        </div>
      }
      {currUserName &&
        <div className="link flex space-between align-center">
          <NavLink exact to="/" activeClassName="activeRoute">Home</NavLink>
          <NavLink to="/chat" activeClassName="activeRoute">Chat</NavLink>
          <NavLink to="/signup" activeClassName="activeRoute">Logout</NavLink>
          <Menu />
        </div>
      }
    </ul>
  </nav>
)

export default NavBar;