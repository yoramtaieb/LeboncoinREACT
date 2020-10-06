import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../components/context/Auth";
import profilLogo from "../assets/favicon/user.svg";
import plusLogo from "../assets/favicon/plus.svg";
import powerLogo from "../assets/favicon/power-button.svg";

export default function NavLogin() {
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    return () => {};
  }, [state]);

  const logOut = () => {
    return dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navBarLogin">
      <div className="navBarLogin-profil">
        <NavLink to="/leboncoin/profil" className="navBarLogin-profil-link">
          <img src={profilLogo} alt="logoProfil" />
          <h4>Profil</h4>
        </NavLink>
      </div>
      <div className="navBarLogin-product">
        <NavLink to="/leboncoin" className="navBarLogin-product-link">
          <img src={plusLogo} alt="logoProduit" />
          <h4>Ajouter</h4>
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
