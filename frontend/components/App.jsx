import React from 'react';

import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Modal />

    <header className="header">
      <nav className="header-nav">
        <div className="header-nav-left">
          <Link className ="header-nav-logo" to="/">
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/5/5e/Nav-open-logo-lotr.png/revision/latest?cb=20160921000347"
              alt="LOTR-logo"></img>
          </Link>

          <Link to="/" className="header-nav-title">Lord BnB</Link>
        </div>
        <NavbarContainer />
      </nav>
    </header>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
