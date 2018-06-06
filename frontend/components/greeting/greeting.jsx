import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const userLoggedIn = () => (
    <div>
      <h2> Welcome, {currentUser.name}</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  const noUserPresent = () => (
    <nav>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  return currentUser ? userLoggedIn() : noUserPresent();
};

export default Greeting;
