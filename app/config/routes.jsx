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
import FindUser from 'containers/FindUser/Loadable';
import MyProfile from 'containers/MyProfile/Loadable';
import SearchContainer from 'containers/SearchContainer/Loadable';
import EditProfileContainer from 'containers/EditProfileContainer/Loadable';
import EditPreferences from 'containers/EditPreferences/Loadable';

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
      {/* dashboard */}
      <RouteWithUserLayout exact path="/my-shaadi" component={HomePage} />
      {/* Profile setting */}
      <RouteWithUserLayout
        path="/my-shaadi/profile"
        component={MyProfile}
      />
      <RouteWithUserLayout
        path="/my-shaadi/edit-profile"
        component={EditProfileContainer}
      />
      <RouteWithUserLayout
        path="/my-shaadi/edit-preferences"
        component={EditPreferences}
      />
      <RouteWithUserLayout
        path="/my-shaadi/setting"
        component={() => <h1> Settings</h1>}
      />
      <RouteWithUserLayout
        path="/my-shaadi/photo"
        component={() => <h1> photos</h1>}
      />
      <RouteWithUserLayout
        path="/my-shaadi/partner-preferences"
        component={MyProfile}
      />
      {/* Advance search for Bride/Groom */}
      <RouteWithUserLayout
        path="/my-shaadi/search"
        component={SearchContainer}
      />
      <RouteWithUserLayout
        path="/my-shaadi/finduser"
        component={FindUser}
      />

      <RouteWithUserLayout path="/features" component={FeaturePage} />
      <RouteWithUserLayout path="/signin" component={Signin} />
      <RouteWithUserLayout path="/signup" component={Signin} />

      {/* Global layout */}
      <RouteWithGlobalLayout path="/my-shaadi/searchusers" component={SearchUsers} />

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
