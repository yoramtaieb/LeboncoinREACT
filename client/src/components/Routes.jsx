import React from "react";
import Main from "./pages/Main";
import SignUpForm from "../components/auth/signupForm";
import SignInForm from "../components/auth/signinForm";
import ProfilBuyer from "./profil/ProfilBuyer";
import ProfilSeller from "./profil/ProfilSeller";
import AddProduct from "../components/product/AddProduct";
import Product from "../components/product/Product";
import Error404 from "../components/utils/helpers/Error404";
import Buyer from "./role/Buyer";
import Seller from "./role/Seller";
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "../components/utils/PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/leboncoin" component={Main} />
      <Route exact path="/leboncoin/signup" component={SignUpForm} />
      <Route exact path="/leboncoin/signin" component={SignInForm} />
      <Route exact path="/leboncoin/home/seller" component={Seller} />
      <Route exact path="/leboncoin/home/buyer" component={Buyer} />
      <Route
        exact
        path="/leboncoin/home/buyer/profil"
        component={ProfilBuyer}
      />
      <Route
        exact
        path="/leboncoin/home/seller/profil"
        component={ProfilSeller}
      />
      <Route
        exact
        path="/leboncoin/home/seller/product"
        component={AddProduct}
      />
      <Route
        exact
        path="/leboncoin/home/seller/product/all"
        component={Product}
      />
      <Route exact path="*" component={Error404} />
    </Switch>
  );
}
