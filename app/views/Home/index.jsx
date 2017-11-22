import React, { Component } from 'react';
import HomeNavbar from 'components/HomeNavbar';
import H1 from 'components/H1';
import Modal from 'components/Modal';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home_banner">
          <div className="row">
            <div className="col s12">
              <HomeNavbar />
              <H1>Meet someone for keeps</H1>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
