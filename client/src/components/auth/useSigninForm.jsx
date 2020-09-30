import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/Auth";

export default function useSigninForm() {
  const [connexion, setConnexion] = useState({
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setConnexion((connexion) => ({
      ...connexion,
      [name]: value,
    }));
  };

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post(`http://localhost:5000/leboncoin/signin`, connexion);
      if (result.status === 200) {
        console.log("bien connecté", result.status);
        setConnexion({
          ...connexion,
          isSubmitting: true,
          errorMessage: null,
        });
        return dispatch({ type: "SIGNIN", payload: result });
      }
    } catch (error) {
      setConnexion({
        ...connexion,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      });
    }
  };

  return {
    handleSubmit,
    handleChange,
    connexion,
  };
}