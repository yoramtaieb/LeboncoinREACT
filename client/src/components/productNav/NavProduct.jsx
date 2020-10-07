import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/Auth";
import logoHome from "../../assets/favicon/home.svg";
import productLogo from "../../assets/favicon/product.svg";
import profilLogo from "../../assets/favicon/user.svg";
import powerLogo from "../../assets/favicon/power-button.svg";

export default function NavProduct() {
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    return () => {};
  }, [state]);

  const logOut = () => {
    return dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navBarLogin">
      <div className="navBarGeneral-home">
        <NavLink
          to="/leboncoin/home/seller"
          className="navBarGeneral-home-link"
        >
          <img src={logoHome} alt="logoHome" />
          <h4>Accueil</h4>
        </NavLink>
      </div>
      <div className="navBarLogin-profil">
        <NavLink
          to="/leboncoin/home/seller/profil"
          className="navBarLogin-profil-link"
        >
          <img src={profilLogo} alt="logoProfil" />
          <h4>Profil</h4>
        </NavLink>
      </div>
      <div className="navBarLogin-profil">
        <NavLink
          to="/leboncoin/home/seller/product/all"
          className="navBarLogin-profil-link"
        >
          <img src={productLogo} alt="logoProfil" className="logoLeb" />
          <h4>Produits</h4>
        </NavLink>
      </div>

      <div className="navBarLogin-deconnexion">
        <NavLink
          onClick={logOut}
          to="/leboncoin"
          className="navBarLogin-deconnexion-link"
        >
          <img src={powerLogo} alt="logoDeco" />
          <h4>Deconnexion</h4>
        </NavLink>
      </div>
    </div>
  );
}
