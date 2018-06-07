import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const noUserPresent = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Sign Up</button>
    </nav>
  );

  const userLoggedIn = () => (
    <div>
      <h2> Welcome, {currentUser.name} </h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );


  return currentUser ? userLoggedIn() : noUserPresent();
};

export default Greeting;
