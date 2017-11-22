import React, { Component } from 'react';
import HomeNavbar from 'components/HomeNavbar';
import H1 from 'components/H1';
import Modal from 'components/Modal';
import SearchBar from 'components/Searchbar';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home_banner">
          <div className="row">
            <div className="col s12">
              <HomeNavbar />
              <H1>Meet someone for keeps</H1>
              <SearchBar />
              <Modal />
            </div>
          </div>
        </div>
        <div className="container flow-container">
          <div className="row">
            <div className="col s12">
              <h4>Find your Special Someone</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
