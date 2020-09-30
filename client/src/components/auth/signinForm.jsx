import React from "react";
import useSigninForm from "../auth/useSigninForm";
import { Redirect } from 'react-router-dom'

export default function SignInForm() {
  const { connexion, handleChange, handleSubmit } = useSigninForm();
 

  return (
    <div>
      {connexion.isSubmitting ? <Redirect to="/leboncoin/home" /> :
        (<div>
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              onChange={handleChange}
              value={connexion.email}
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              onChange={handleChange}
              value={connexion.password}
              type="password"
              placeholder="Mot de passe"
            />
            <button disabled={connexion.isSubmitting} type="submit" >
              Envoyer
            </button>
          </form>
        </div>
    )}
    </div>
  );
}