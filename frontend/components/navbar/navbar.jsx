import React from 'react';

const Navbar = ({ currentUser, logout, openModal, demoLogin }) => {

  const noUserPresent = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => openModal('signup')}>Sign Up</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => demoLogin()}>Demo Login</button>
    </nav>
  );

  const userLoggedIn = () => (
    <nav className = "logout">
      <h2> Welcome, {currentUser.name} </h2>
      <button onClick={logout}>Log Out</button>
    </nav>
  );


  return currentUser ? userLoggedIn() : noUserPresent();
};

export default Navbar;
