import React from "react";
import { Route, Redirect } from "react-router-dom";
import useSigninForm from "../auth/useSigninForm";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      useSigninForm.isSubmitting ? (
        <Component {...props} />
      ) : (
        <Redirect to="/leboncoin" />
      )
    }
  />
);
