import React from "react";
import useSignupForm from "../auth/useSignupForm";
import { Redirect, Link } from "react-router-dom";
import NavLogin from "../NavLogin";
import instaIcon from "../../assets/favicon/instagram.svg";
import fbIcon from "../../assets/favicon/facebook.svg";
import twitterIcon from "../../assets/favicon/twitter.svg";
import Header from "../Nav";

export default function SignUpForm() {
  const { inputs, handleInputChange, handleSubmit } = useSignupForm();
  const whiteSpace = " ".repeat(500);
  console.log(whiteSpace);
  return (
    <>
      <NavLogin titleLogin="Inscription" />
      {inputs.isSubmitting ? (
        <Redirect to="/leboncoin/signin" />
      ) : (
        <div className="formSignup">
          <h2 className="formSignup-titre">
            Inscrivez-vous gratuitement pour profiter des produits
          </h2>
          <div className="formSignup-divLigne1">
            <hr className="formSignup-ligne1" />
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="formSignup-formGen"
          >
            <label htmlFor="firstName" className="formSignup-label">
              Prénom
            </label>
            <div className="formSignup-input1">
              <input
                name="firstName"
                onChange={handleInputChange}
                value={inputs.firstName}
                type="text"
                placeholder="Entrez votre prénom"
              />
            </div>
            <label htmlFor="lastName" className="formSignup-label">
              Nom
            </label>
            <div className="formSignup-input2">
              <input
                name="lastName"
                onChange={handleInputChange}
                value={inputs.lastName}
                type="text"
                placeholder="Entrez votre nom"
              />
            </div>
            <label htmlFor="email" className="formSignup-label">
              Email
            </label>
            <div className="formSignup-input3">
              <input
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                type="email"
                placeholder="Saisissez une adresse email"
              />
            </div>
            <label htmlFor="password" className="formSignup-label">
              Mot de passe
            </label>
            <div className="formSignup-input4">
              <input
                name="password"
                onChange={handleInputChange}
                value={inputs.password}
                type="password"
                placeholder="Créez un mot de passe"
              />
            </div>
            <label htmlFor="Date de naissance" className="formSignup-label">
              Date de naissance
            </label>
            <div className="formSignup-input5">
              <input
                className="formSignup-inputDate"
                name="birthday"
                onChange={handleInputChange}
                value={inputs.birthday}
                type="Date"
                placeholder={`Entrez votre date de naissance ${whiteSpace}`}
              />
            </div>
            <label htmlFor="Role" className="formSignup-label">
              Role
            </label>
            <div className="formSignup-input6">
              <select
                name="role"
                onChange={handleInputChange}
                value={inputs.role}
              >
                <option value="Vendeur">Vendeur</option>
                <option value="Acheteur">Acheteur</option>
              </select>
            </div>
            <div className="formSignup-buttonDiv">
              <button type="submit" className="formSignup-buttonDiv-button">
                S'inscrire
              </button>
            </div>
          </form>
          <div className="formSignup-divLigne2">
            <hr className="formSignup-ligne2" />
          </div>
          <div className="formSignup-divIcon">
            <Link
              className="formSignup-divIcon-imgIcon"
              href="https://www.instagram.com/leboncoin/?hl=fr"
              target="_blank"
            >
              <img src={instaIcon} alt="LogoInsta" />
            </Link>
            <Link
              className="formSignup-divIcon-imgIcon"
              href="https://www.facebook.com/leboncoin-1565057520410527"
              target="_blank"
            >
              <img src={fbIcon} alt="LogoFb" />
            </Link>
            <Link href="https://twitter.com/leboncoin" target="_blank">
              <img src={twitterIcon} alt="LogoTwitter" />
            </Link>
          </div>
        </div>
      )}
      <Header />
    </>
  );
}
