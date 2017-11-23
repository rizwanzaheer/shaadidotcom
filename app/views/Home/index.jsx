import React, { Component } from 'react';
import HomeNavbar from 'components/HomeNavbar';
import H1 from 'components/H1';
import Modal from 'components/Modal';
import SearchBar from 'components/Searchbar';
import WorkFLowContainer from 'components/WorkFlowContainer';
import Footer from 'components/Footer';
import './home.scss';
import SignupImg from '../../images/home-icon-sprite.png';

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
              <WorkFLowContainer img={SignupImg} title="Sign Up" para="Register for free & put up your Profile" />
              <WorkFLowContainer img={SignupImg} title="Connect" para="Select & Connect with Matches you like" />
              <WorkFLowContainer img={SignupImg} title="Interact" para="Become a Premium Member & Start a Conversation" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
