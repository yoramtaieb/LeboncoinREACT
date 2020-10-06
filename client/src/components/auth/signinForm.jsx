import React from "react";
import useSigninForm from "../auth/useSigninForm";
import { Redirect, Link } from "react-router-dom";
import Return from "../Return";
import instaIcon from "../../assets/favicon/instagram.svg";
import fbIcon from "../../assets/favicon/facebook.svg";
import twitterIcon from "../../assets/favicon/twitter.svg";
import Nav from "../Nav";

export default function SignInForm() {
  const { connexion, handleChange, handleSubmit } = useSigninForm();

  return (
    <>
      <Return titleLogin="Connexion" />
      {connexion.isSubmitting ? (
        <Redirect to="/leboncoin/home" />
      ) : (
        <div className="formSignin">
          <h2 className="formSignin-titre">
            Connectez-vous pour <br /> accéder aux ventes
          </h2>

          <div className="formSignin-divLigne1">
            <hr className="formSignin-ligne1" />
          </div>
          <form onSubmit={handleSubmit} className="formSignin-formGen">
            <label htmlFor="email" className="formSignin-label">
              Email
            </label>
            <div className="formSignin-input1">
              <input
                name="email"
                onChange={handleChange}
                value={connexion.email}
                type="email"
                placeholder="Entrez votre email"
              />
            </div>
            <label htmlFor="password" className="formSignin-label">
              Mot de passe
            </label>
            <div className="formSignin-input2">
              <input
                name="password"
                onChange={handleChange}
                value={connexion.password}
                type="password"
                placeholder="Entrez votre mot de passe"
              />
            </div>
            <div className="formSignin-buttonDiv">
              <button
                disabled={connexion.isSubmitting}
                type="submit"
                className="formSignin-buttonDiv-button"
              >
                Envoyer
              </button>
            </div>
            <div className="formSignin-divLigne2">
              <hr className="formSignin-ligne2" />
            </div>
          </form>
          <div className="formSignin-paraFinal">
            <p>Vous n'avez pas de compte ?</p>
            <Link to="/leboncoin/signup">
              <button>Je n'ai pas de compte</button>
            </Link>
          </div>
          <div className="formSignin-divIcon">
            <Link
              className="formSignin-divIcon-imgIcon"
              href="https://www.instagram.com/leboncoin/?hl=fr"
              target="_blank"
            >
              <img src={instaIcon} alt="LogoInsta" />
            </Link>
            <Link
              className="formSignin-divIcon-imgIcon"
              href="https://www.facebook.com/leboncoin-1565057520410527"
              target="_blank"
            >
              <img src={fbIcon} alt="LogoFb" />
            </Link>
            <Link to="https://twitter.com/leboncoin" target="_blank">
              <img src={twitterIcon} alt="LogoTwitter" />
            </Link>
          </div>
          <Nav />
        </div>
      )}
    </>
  );
}
