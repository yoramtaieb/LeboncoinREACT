import React from "react";
import useSignupForm from "../auth/useSignupForm";
import { Redirect } from 'react-router-dom'

export default function SignUpForm() {
  const { inputs, handleInputChange, handleSubmit } = useSignupForm();

  return (
    <div>
     {inputs.isSubmitting ? <Redirect to="/leboncoin/signin" /> :
     (<div>
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            type="text"
            placeholder="Prénom"
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
            name="birthday"
            onChange={handleInputChange}
            value={inputs.birthday}
            type="date"
          />
          <select name="role"
            onChange={handleInputChange}
            value={inputs.role}
          >
          <option value="Vendeur">Vendeur</option>
          <option value="Acheteur">Acheteur</option>
          </select>
            <button type="submit">Envoyer</button>
        </form>
      </div>
    )}
    </div>
  );
}