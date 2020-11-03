import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../atoms/context/Auth";
import logoHome from "../../components/assets/favicon/home.svg";
import profilLogo from "../assets/favicon/user.svg";
import powerLogo from "../assets/favicon/power-button.svg";

export default function NavBuyer() {
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
        <NavLink to="/leboncoin/home/buyer" className="navBarGeneral-home-link">
          <img src={logoHome} alt="logoHome" />
          <h4>Accueil</h4>
        </NavLink>
      </div>
      <div className="navBarGeneral-profil">
        <NavLink
          to="/leboncoin/home/buyer/profil"
          className="navBarGeneral-profil-link"
        >
          <img src={profilLogo} alt="logoProfil" />
          <h4>Profil</h4>
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
