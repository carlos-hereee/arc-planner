import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./stylesheets/index.scss";
import { AuthState } from "./utils/context/AuthContext";
import { PlayerState } from "./utils/context/Player/PlayerState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthState>
        <PlayerState>
          <App />
        </PlayerState>
      </AuthState>
    </Router>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
