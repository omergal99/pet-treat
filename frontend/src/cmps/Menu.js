import React, { useState } from 'react';

function Menu() {

  const toOpen = 'assets/img/general/icons/burger.png';
  const toClose = 'assets/img/general/icons/burger-white.png';

  let menuStatus = toClose;

  const [isClose, toggleIsClose] = useState(true);

  const toggleMenu = () => {
    toggleIsClose(!isClose)
    // if (menuStatus === toClose) {
    //   console.log('111111')
    //   menuStatus = 'assets/img/general/icons/burger.png';
    // }else{
    //   console.log('2222222')
    //   menuStatus = toClose;
    // }
  }

  return (
    // <li className="nav-options" onClick={toggleMenu.bind(this)}>
    <li className="nav-options" onClick={() => toggleMenu()}>
      {isClose &&
        <img src={toOpen} alt="Menu" />
      }
      {!isClose &&
        <img src={toClose} alt="Menu" />
      }
    </li>
  );
}

export default React.memo(Menu)