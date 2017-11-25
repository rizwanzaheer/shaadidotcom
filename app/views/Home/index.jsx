import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import HomeNavbar from 'components/HomeNavbar';

import H1 from 'components/H1';
import H2 from 'components/H2';
import SearchBar from 'components/Searchbar';
import WorkFLowContainer from 'components/WorkFlowContainer';
import Footer from 'components/Footer';
import messages from './messages';
import './home.scss';
import SignupImg from '../../images/home-icon-sprite.png';

class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="home-page">
        <div className="home_banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <HomeNavbar />
                <H1>
                  <FormattedMessage {...messages.heroText} />
                </H1>
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
        <div className="container flow-container">
          <div className="row">
            <div className="col s12">
              <H2>
                <FormattedMessage {...messages.workFlowHeroText} />
              </H2>
              <WorkFLowContainer
                img={SignupImg}
                title="Sign Up"
                para="Register for free & put up your Profile"
              />
              <WorkFLowContainer
                img={SignupImg}
                title="Connect"
                para="Select & Connect with Matches you like"
              />
              <WorkFLowContainer
                img={SignupImg}
                title="Interact"
                para="Become a Premium Member & Start a Conversation"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
