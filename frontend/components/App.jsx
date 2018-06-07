import React from 'react';

import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1= "header logo">Lord BnB</h1>
      <NavbarContainer />
    </header>
  </div>
);

export default App;
