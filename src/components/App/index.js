import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation/index";
import LandingPage from "../Landing/app";
import SignUpPage from "../SignUp/index";
import SignInPage from "../SignIn/app";
import PasswordForgetPage from "../PasswordForget/app";
import HomePage from "../Home/app";
import AccountPage from "../Account/app";
import AdminPage from "../Admin/app";

import * as ROUTES from "../../constants/routes";
import withAuthentication from "../Session/withAuthentication";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
