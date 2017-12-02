import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Signin from 'components/Auth/Signin';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Backoffice from 'containers/Backoffice/Loadable';
import SearchUsers from 'containers/SearchUsers/Loadable';
// import AdminDashboard from "containers/AdminLayout/AdminDashboard";
import Home from '../views/Home';

const RouteWithGlobalLayout = ({ component, ...rest }) => (
  <div>
    <Header />
    <Route {...rest} render={() => React.createElement(component)} />
    <Footer />
  </div>
);
const RouteWithUserLayout = ({ component, ...rest }) => (
  <div>
    <Header />
    {!localStorage.getItem('user_token') && <Redirect push to="/signin" />}
    <Route {...rest} render={() => React.createElement(component)} />
    <Footer />
  </div>
);

const RouteWithAdminLayout = ({ component, ...rest }) => (
  <div>
    <Header />
    {!localStorage.getItem('backoffice_token') && (
      <Redirect push to="/backoffice/signin" />
    )}
    <Route {...rest} render={() => React.createElement(component)} />
    <Footer />
  </div>
);

const CustomRoutes = () => (
  <div>
    <Switch>
      {/* User Routes */}
      <Route exact path="/" component={Home} />
      <RouteWithUserLayout exact path="/dashboard" component={HomePage} />
      <RouteWithUserLayout path="/features" component={FeaturePage} />
      <RouteWithUserLayout path="/signin" component={Signin} />

      {/* Global layout */}
      <RouteWithGlobalLayout path="/searchusers" component={SearchUsers} />

      {/* Admin Routes */}
      <RouteWithAdminLayout exact path="/backoffice" component={Backoffice} />
      {/* <RouteWithAdminLayout
        path="/backoffice/dashboard"
        component={AdminDashboard}
      /> */}
      <RouteWithAdminLayout
        path="/backoffice/help"
        component={() => <h1> backoffice/help route wroking </h1>}
      />
      <RouteWithAdminLayout path="/backoffice/signin" component={Signin} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);
export default CustomRoutes;
