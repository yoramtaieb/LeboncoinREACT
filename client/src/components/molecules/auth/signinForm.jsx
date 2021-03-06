import React from "react";
import { Redirect, Link } from "react-router-dom";
import useSigninForm from "./useSigninForm";
import Return from "../../pages/Return";
import Nav from "../../pages/Nav";
import Carousel from "../../carousel/Carousel";
import Footer from "../../pages/Footer";

export default function SignInForm() {
  const { connexion, handleChange, handleSubmit } = useSigninForm();

  return (
    <>
      <div className="desktop-carousel">
        <Carousel />
      </div>
      {connexion.isSubmitting ? (
        <Redirect to="/leboncoin/home/seller" />
      ) : (
        <div className="formSignin">
          <Return title="Connexion" router2="/leboncoin" imgArrow={true} />
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
            {connexion.errorMessage && (
              <span className="formSignin-error">
                {connexion.errorMessage.data.description}
              </span>
            )}
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
          <Nav />
          <Footer />
        </div>
      )}
    </>
  );
}
