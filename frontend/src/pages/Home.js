import React from 'react';
import { NavLink } from 'react-router-dom';

function Home({ currUser }) {

  return (
    <section className="home">
      <div className="open-img"></div>

      <div className="grid">
        <NavLink to="/chat">
          <img src="assets/img/home/dog chat.png" alt="Chat" />
          <label>Chat</label>
        </NavLink>
        <NavLink to="/gallery">
          <img src="assets/img/home/dog gallery.png" alt="Gallery" />
          <label>Gallery</label>
        </NavLink>
        <NavLink to="/forbidden-food">
          <img src="assets/img/home/foot print forbidden.png" alt="Forbidden" />
          <label>Fordibben food</label>
        </NavLink>
        <NavLink to="/dog-love">
          <img src="assets/img/home/foot print love.png" alt="Love" />
          <label>Dog love!</label>
        </NavLink>
      </div>
    </section>
  );
}

export default React.memo(Home)
