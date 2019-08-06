import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import actions from '../store/actions';

import Menu from './Menu';

function NavBar({ currUserName }) {
  // const dispatch = useDispatch();

  const toOpen = 'assets/img/general/icons/burger.png';
  const toClose = 'assets/img/general/icons/burger-white.png';
  const [menuImg, toggleMenuImg] = useState(toOpen);

  const toggleMenu = () => {
    (menuImg === toClose) ? toggleMenuImg(toOpen) : toggleMenuImg(toClose);
  }

  // const logout = () => {
  //   dispatch(actions.logout());
  // }

  return (
    <nav className="Nav_menu">
      <ul>
        {!currUserName &&
          <div className="link">
            <NavLink to="/" activeClassName="activeRoute">Sign Up</NavLink>
          </div>
        }
        {currUserName &&
          <div className="link flex space-between align-center">
            <NavLink exact to="/" activeClassName="activeRoute">LOGO</NavLink>
            {/* <NavLink to="/chat" activeClassName="activeRoute">Chat</NavLink> */}
            {/* <NavLink to="/signup" activeClassName="activeRoute" onClick={logout.bind(this)}>Logout</NavLink> */}

            <li className="nav-options" onClick={toggleMenu.bind(this)}>
              <img src={menuImg} alt="Menu" />
            </li>

          </div>
        }
      </ul>
      <Menu isOpen={(menuImg === toClose)} onClose={toggleMenu.bind(this)} />
    </nav>
  );
}

export default React.memo(NavBar)