import React from "react";
import useSignupForm from "../auth/useSignupForm";
import { Redirect } from "react-router-dom";

export default function SignUpForm() {
  const { inputs, handleInputChange, handleSubmit } = useSignupForm();

  return (
    <div>
      {inputs.isSubmitting ? (
        <Redirect to="/leboncoin/signin" />
      ) : (
        <div className="formSignup">
          <h2>Inscrivez-vous gratuitement pour profiter des produits</h2>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="firstName">Prénom</label>
            <input
              name="firstName"
              onChange={handleInputChange}
              value={inputs.firstName}
              type="text"
              placeholder="Entrez votre prénom"
            />
            <input
              name="lastName"
              onChange={handleInputChange}
              value={inputs.lastName}
              type="text"
              placeholder="Nom"
            />
            <input
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              type="password"
              placeholder="Mot de passe"
            />
            <input
              name="city"
              onChange={handleInputChange}
              value={inputs.city}
              type="text"
              placeholder="Ville"
            />
            <input
              name="description"
              onChange={handleInputChange}
              value={inputs.descripton}
              type="text"
              placeholder="Description"
            />
            <input
              className="inputDate"
              name="birthday"
              onChange={handleInputChange}
              value={inputs.birthday}
              type="date"
            />
            <select
              name="role"
              onChange={handleInputChange}
              value={inputs.role}
            >
              <option value="Vendeur">Vendeur</option>
              <option value="Acheteur">Acheteur</option>
            </select>
            <div className="buttonDiv">
              <button type="submit">S'inscrire</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
