import React from "react";
import Home from "../components/pages/Home";
import Main from "./Main";
import SignUpForm from "../components/auth/signupForm";
import SignInForm from "../components/auth/signinForm";
import Error404 from "../components/utils/helpers/Error404";
import { Switch, Route } from "react-router-dom";
// import { PrivateRoute } from "../components/utils/PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/leboncoin" component={Main} />
      <Route exact path="/leboncoin/signup" component={SignUpForm} />
      <Route exact path="/leboncoin/signin" component={SignInForm} />
      <Route exact path="/leboncoin/home" component={Home} />
      <Route exact path="*" component={Error404} />
    </Switch>
  );
}
