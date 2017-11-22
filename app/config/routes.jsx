import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Signin from "components/Auth/Signin";
import Home from "../views/Home";

const CustomRoutes = () => (
  <div>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/dashboard" component={HomePage} /> */}
      <Route path="/features" component={FeaturePage} />
      <Route path="/signin" component={Signin} />
      {/* <Route path="/backoffice" component={Backoffice} /> */}
      {/* <Route
        path="/backoffice/help"
        component={() => <h1> backoffice/help route wroking </h1>}
      /> */}
      <Route path="" component={NotFoundPage} />
    </Switch>
    {/* <Footer /> */}
  </div>
);
export default CustomRoutes;
