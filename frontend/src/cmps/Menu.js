import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../store/actions';
// import PilotSwitch from './PilotSwitch';

function Menu({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const closeMenu = () => {
    onClose();
  }

  const logout = () => {
    dispatch(actions.logout());
    onClose();
  }

  return (
    <div>
      <div>
        <div className="cover" style={{ display: isOpen ? '' : 'none' }} onClick={closeMenu.bind(this)}></div>

        <div className="menu" style={{ right: isOpen ? '' : '-82vw' }}>
          <div className="head flex flex-col">
            <div className="flex relative">
              <div className="dog-img">
                <img src="../assets/img/dog/messi.jpg" alt="Messi" />
              </div>

              <div className="dog-details">
                <label><span>name: </span>Messi</label>
                <label><span>age: </span>10.5</label>
                <label><span>species: </span>Golden and cocker spaniol</label>
              </div>

              <div className="close" onClick={closeMenu.bind(this)}>X</div>
            </div>
            <div className="dog-edit">
              <button>Edit Details</button>
            </div>
          </div>

          <div className="options">
            <ul>
              <div>Options</div>
              <li>Gallery</li>
              <li>The Family</li>
              <li>Export Chat</li>
              <hr />
              <div>Acount</div>
              <li>Settings</li>
              <li onClick={logout.bind(this)}>Logout</li>
            </ul>
          </div>

          {/* <PilotSwitch isChecked="true" /> */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Menu)