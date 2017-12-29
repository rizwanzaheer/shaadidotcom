import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { withRouter } from 'react-router-dom';
import HomeNavbar from 'components/HomeNavbar';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Slider from 'components/Slider';
import SearchBar from 'components/Searchbar';
import WorkFLowContainer from 'components/WorkFlowContainer';
import Footer from 'components/Footer';
import FindSomeComponent from 'components/FindSomeComponent';
import MoreDetailButtonRight from 'components/MoreDetailButtonRight';
import { findSomeOneBy } from './homeData';
import messages from './messages';
import Logo from '../../images/home-page-layer-logo.png';
import './home.scss';

class Home extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="home-page">
        {/* Top home page banner */}
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
        {/* login/site working flow container */}
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
                  type="Signup"
                  para={
                    <FormattedMessage {...messages.workFlowSignupParaText} />
                  }
                />
                <WorkFLowContainer
                  title={
                    <FormattedMessage {...messages.workFlowConnectTitleText} />
                  }
                  type="Connect"
                  para={
                    <FormattedMessage {...messages.workFlowConnectParaText} />
                  }
                />
                <WorkFLowContainer
                  title={
                    <FormattedMessage {...messages.workFlowInteractTitleText} />
                  }
                  type="Interact"
                  para={
                    <FormattedMessage {...messages.workFlowInteractParaText} />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* find someone container */}
        <div className="container find-someone-container">
          <div className="row">
            <div className="col-12">
              <H2>
                <FormattedMessage {...messages.findSomeOneHeroText} />
              </H2>
            </div>
          </div>
          <div className="row">
            {findSomeOneBy.map((data, i) => (
              <div className="col-md-4" key={data.name}>
                <FindSomeComponent data={data} />
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid">
          <Slider />
        </div>
        {/* waiting-happen-container */}
        <div className="container-fluid ">
          <div className="row text-center waiting-happen-container">
            <div className="col-12">
              <h4>
                <FormattedMessage {...messages.yourStoryHappenText} />
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn waves-effect text-white waves-float wave-light btn-outline btn-lg"
                >
                  <FormattedMessage {...messages.yourStoryHappenButtonText} />
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* About site container */}
        <div className="container about-site-container">
          <div className="row">
            <div className="col-12 text-center">
              <img src={Logo} alt="Shaadidotcom" />
            </div>
            <div className="col-12 text-center about-site-info">
              <p>
                Shaadi dot com, The World's No.1 Matchmaking Service, was
                founded with a simple objective - to help people find happiness.
              </p>
              <p>
                Shaadi.com (sometimes mis-spelt as Shadi) is a social networking
                site specialising in matchmaking and not just a matrimonial
                service. As a leader in
              </p>
              <p>
                what is sometimes known as the matrimony category,
                {/* we have touched more than 35 million lives. */}
              </p>
              <p>
                Shaadi dot com has always differentiated itself from other
                matrimonials through its innovation-led approach. By redefining
                the way brides and
              </p>
              <p>
                grooms meet for marriage, Shaadi.com has created a
                world-renowned brand that has changed the way of finding a life
                partner.
                <MoreDetailButtonRight label="learn more" url="#" />
              </p>
            </div>
          </div>
        </div>
        {/* Footer  component */}
        <Footer />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: (evt) => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = (state) => ({
  home: state,
});
// createStructuredSelector({
// repos: makeSelectRepos(),
// username: makeSelectUsername(),
// loading: makeSelectLoading(),
// error: makeSelectError(),
// });

// const mapStateToProps = (state) => {
//   console.log('mapstateToprops: ', state);
//   return {
//     customState: state,
//   };
// };

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withRouter(withConnect(Home));

const withReducer = injectReducer({
  // key: 'home', reducer
});
const withSaga = injectSaga({
  // key: 'home', saga
});

// export default compose({}, {}, withConnect)(Home);

// export default Home;
