import React from "react";
import useSignupForm from "../auth/useSignupForm";
import { Redirect, Link } from "react-router-dom";
import Return from "../pages/Return";
import Nav from "../pages/Nav";

export default function SignUpForm() {
  const { inputs, handleInputChange, handleSubmit } = useSignupForm();

  return (
    <>
      <Return titleLogin="Inscription" imgArrow={true} />
      {inputs.isSubmitting ? (
        <Redirect to="/leboncoin/signin" />
      ) : (
        <div className="formSignup">
          <h2 className="formSignup-titre">
            Inscrivez-vous gratuitement pour profiter des ventes
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
              />
            </div>
            <label htmlFor="Role" className="formSignup-label">
              Rôle
            </label>
            <div className="formSignup-input6">
              <select
                name="role"
                onChange={handleInputChange}
                value={inputs.role}
              >
                <option value="">--Choississez un rôle--</option>
                <option value="Vendeur">Vendeur</option>
                <option value="Acheteur">Acheteur</option>
              </select>
            </div>
            {inputs.errorMessage && (
              <span className="formSignup-error">
                {inputs.errorMessage.data.description}
              </span>
            )}
            <div className="formSignup-buttonDiv">
              <button type="submit" className="formSignup-buttonDiv-button">
                S'inscrire
              </button>
            </div>
          </form>
          <div className="formSignup-divLigne2">
            <hr className="formSignup-ligne2" />
          </div>
          <div className="formSignup-paraFinal">
            <p>Vous avez déjà un compte ?</p>
            <Link to="/leboncoin/signin">
              <button>J'ai déjà un compte</button>
            </Link>
          </div>
        </div>
      )}
      <Nav />
    </>
  );
}
