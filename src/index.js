import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./stylesheets/index.scss";
import { AllianceState } from "./utils/context/Alliance/AllianceContext";
import { AuthState } from "./utils/context/Auth/AuthContext";
import { KingdomState } from "./utils/context/Kingdom/KingdomContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthState>
        <KingdomState>
          <AllianceState>
            <App />
          </AllianceState>
        </KingdomState>
      </AuthState>
    </Router>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
