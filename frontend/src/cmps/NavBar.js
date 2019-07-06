import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({currUserName}) => (
  <nav className="Nav_menu">
    <ul>
      {!currUserName &&
        <div className="link">
          <NavLink className="Nav_link" to="/"
            activeClassName="activeRoute">Sign Up</NavLink>
        </div>
      }
      {currUserName &&
        <div className="link flex space-between align-center">
          <NavLink exact className="Nav_link" to="/" activeClassName="activeRoute">Home</NavLink>
          <NavLink className="Nav_link" to="/chat" activeClassName="activeRoute">Chat</NavLink>
          <NavLink className="Nav_link" to="/signup" activeClassName="activeRoute">Logout</NavLink>
        </div>
      }
    </ul>
  </nav>
)

export default NavBar;