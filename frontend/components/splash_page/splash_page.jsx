import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => {
  return (
    <div className='background'>
      <Link to="/locations" className="background.image">
        <img src="http://www.theonering.net/torwp/wp-content/uploads/2013/07/lord-of-the-rings-fellowship-of-the-ring-the-silhouettes.jpg"/>
      </Link>
      <a className="splash-text" href="/locations">One Vacation Spot to Host Them All</a>

    </div>
  )
}

export default SplashPage
