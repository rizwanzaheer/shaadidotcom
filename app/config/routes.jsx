import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Signin from 'components/Auth/Signin';

const CustomRoutes = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="/signin" component={Signin} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);
export default CustomRoutes;
