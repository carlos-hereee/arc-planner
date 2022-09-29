import React from "react";
import { Route, Redirect } from "react-router-dom";

import { checkAuth } from "./localStorage";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);
