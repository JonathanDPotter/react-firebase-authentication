import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <div>
    <ul id="routes-list" className="routes-list">
      <li className="route-list-item">
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li className="route-list-item">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li className="route-list-item">
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li className="route-list-item">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li className="route-list-item">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
