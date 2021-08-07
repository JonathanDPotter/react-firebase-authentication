import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing/app";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn/app";
import PasswordForgetPage from "../PasswordForget/app";
import HomePage from "../Home/app";
import AccountPage from "../Account/app";
import AdminPage from "../Admin/app";
import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;
