import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../components/pages/Main";
import SignUpForm from "../components/molecules/auth/signupForm";
import SignInForm from "../components/molecules/auth/signinForm";
import ProfilBuyer from "../components/pages/profil/ProfilBuyer";
import ProfilSeller from "../components/pages/profil/ProfilSeller";
import AddProduct from "../components/pages/product/AddProduct";
import Product from "../components/pages/product/Product";
import Error404 from "../components/utils/helpers/Error404";
import Buyer from "../components/molecules/role/Buyer";
import Seller from "../components/molecules/role/Seller";
import ProductCategories from "../components/pages/product/ProductCategories";
import ProductCities from "../components/pages/product/ProductCities";
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
      <Route
        exact
        path="/leboncoin/home/product/categorie/:name"
        component={ProductCategories}
      />
      <Route
        exact
        path="/leboncoin/home/product/citie/:name"
        component={ProductCities}
      />
      <Route exact path="*" component={Error404} />
    </Switch>
  );
}
