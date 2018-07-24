import React from 'react';

import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import { Link, Route, Switch } from 'react-router-dom';
import Footer from './footer/footer';
import LocationIndexContainer from './location/location_index_container';
import LocationDetailContainer from './location/location_detail_container';
import BookingIndexContainer from './booking/booking_index_container';
import SplashPage from './splash_page/splash_page';
import LocationMap from './map/location_map';
import SearchContainer from './map/search_container';


const App = () => (
  <div className="rootDiv">
    <Modal />

    <header className="header">
      <nav className="header-nav">
        <div className="header-nav-left">
          <Link className ="header-nav-logo" to="/locations">
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/5/5e/Nav-open-logo-lotr.png/revision/latest?cb=20160921000347"
              alt="LOTR-logo"></img>
          </Link>

        </div>
        <NavbarContainer />
      </nav>
    </header>


    <Switch>
      <Route exact path="/locations/:locationId" component={ LocationDetailContainer } />
      <Route exact path="/" component={ SplashPage } />
      <Route exact path="/users/:userId" component={ BookingIndexContainer } />
      <Route path='/map' component={ SearchContainer } />
      <Route exact path="/locations" component={ LocationIndexContainer } />
    </Switch>






    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
