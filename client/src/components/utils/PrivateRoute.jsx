import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../atoms/context/Auth";

export default function ProtectedRoutes({ component: Component, ...rest }) {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/leboncoin" />;
      }}
    />
  );
}
