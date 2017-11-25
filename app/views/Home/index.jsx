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

class Home extends Component {
  // eslint-disable-line react/prefer-stateless-function
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
            <div className="col-12">
              <H2>
                <FormattedMessage {...messages.workFlowHeroText} />
              </H2>
              <div className="row">
                <WorkFLowContainer
                  title={
                    <FormattedMessage {...messages.workFlowSignupTitleText} />
                  }
                  para={
                    <FormattedMessage {...messages.workFlowSignupParaText} />
                  }
                />
                <WorkFLowContainer
                  title={
                    <FormattedMessage {...messages.workFlowConnectTitleText} />
                  }
                  para={
                    <FormattedMessage {...messages.workFlowConnectParaText} />
                  }
                />
                <WorkFLowContainer
                  title={
                    <FormattedMessage {...messages.workFlowInteractTitleText} />
                  }
                  para={
                    <FormattedMessage {...messages.workFlowInteractParaText} />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
