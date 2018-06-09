import React from 'react';

const Navbar = ({ currentUser, logout, openModal, demoLogin }) => {

  const noUserPresent = () => (
    <ul className="login-signup">
      <li><div onClick={() => openModal('login')}>Login</div></li>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <li><div onClick={() => openModal('signup')}>Sign Up</div></li>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <li><div onClick={() => demoLogin()}>Demo Login</div></li>
    </ul>
  );

  const userLoggedIn = () => (
    <nav className = "logout">
      <h2 className="logout-item"> Welcome, {currentUser.name} </h2>
      <button className="logout-item" onClick={logout}>Log Out</button>
    </nav>
  );


  return currentUser ? userLoggedIn() : noUserPresent();
};

export default Navbar;
