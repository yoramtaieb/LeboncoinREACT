import React from "react";
import { NavLink } from "react-router-dom";
import logoHome from "../assets/favicon/home.svg";
import logoConnexion from "../assets/favicon/login.svg";
import logoInsc from "../assets/favicon/forms.svg";

export default function Nav() {
  return (
    <div className="navBarGeneral">
      <div className="navBarGeneral-home">
        <NavLink to="/leboncoin" className="navBarGeneral-home-link">
          <img src={logoHome} alt="logoHome" />
          <h4>Accueil</h4>
        </NavLink>
      </div>
      <div className="navBarGeneral-connexion">
        <NavLink
          to="/leboncoin/signin"
          className="navBarGeneral-connexion-link"
        >
          <img src={logoConnexion} alt="logoConnexion" />
          <h4>Connexion</h4>
        </NavLink>
      </div>
      <div className="navBarGeneral-inscription">
        <NavLink
          to="/leboncoin/signup"
          className="navBarGeneral-inscription-link"
        >
          <img src={logoInsc} alt="logoInsc" />
          <h4>Inscription</h4>
        </NavLink>
      </div>
    </div>
  );
}
