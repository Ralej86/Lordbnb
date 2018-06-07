import React from 'react';

import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1>Lord BnB</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
