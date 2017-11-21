import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeNavbar from 'components/HomeNavbar';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home_banner">
          <div className="row">
            <div className="col s12">
              <HomeNavbar />
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/test" component={() => <h1> hellow world </h1>} />
        </Switch>
      </div>
    );
  }
}
export default Home;
