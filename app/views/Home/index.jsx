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
  componentDidMount() {
    $('.btn-primary').click(() => {
      alert("btn-primary");
    });
     $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="home-page">
        <div className="home_banner">
          <div className="row">
            <div className="col-sm-12">
              <HomeNavbar />
              <H1>Meet someone for keeps</H1>
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                Tooltip on top
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="right"
                title="Tooltip on right"
              >
                Tooltip on right
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Tooltip on bottom"
              >
                Tooltip on bottom
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="left"
                title="Tooltip on left"
              >
                Tooltip on left
              </button>
              <button type="button" className="btn btn-raised btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-raised btn-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-raised btn-success">
                Success
              </button>
              <button type="button" className="btn btn-raised btn-info">
                Info
              </button>
              <button type="button" className="btn btn-raised btn-warning">
                Warning
              </button>
              <button type="button" className="btn btn-raised btn-danger">
                Danger
              </button>
              <button type="button" className="btn btn-raised btn-link">
                Link
              </button>
              <button type="button" className="btn btn-raised active">
                <code>.active</code>
              </button>
              {/* <SearchBar />
              <Modal /> */}
            </div>
          </div>
        </div>
        <div className="container flow-container">
          <div className="row">
            <div className="col s12">
              <h4>Find your Special Someone</h4>
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
