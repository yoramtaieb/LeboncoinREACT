import React from "react";
import Home from '../components/pages/Home'
import Main from './Main'
import SignUpForm from '../components/auth/signupForm'
import SignInForm from '../components/auth/signinForm'
import { Switch, Route } from "react-router-dom";


export default function Routes() {
  return (
    <Switch>
        <Route path="/leboncoin/signup" component={SignUpForm} />
        <Route path="/leboncoin/signin" component={SignInForm} />
        <Route path="/leboncoin/home" component={Home} />
        <Route path="/leboncoin" component={Main} />
    </Switch>
  );
}