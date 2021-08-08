import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase/index";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
