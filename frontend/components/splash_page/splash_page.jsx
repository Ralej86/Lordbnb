import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => {
  return (
    <div className='background'>
      <Link to="/locations" className="background.image">
        <img src="http://www.theonering.net/torwp/wp-content/uploads/2013/07/lord-of-the-rings-fellowship-of-the-ring-the-silhouettes.jpg"/>
      </Link>
      <p>Click Anywhere To Begin Your Journey</p>
    </div>
  )
}

export default SplashPage
