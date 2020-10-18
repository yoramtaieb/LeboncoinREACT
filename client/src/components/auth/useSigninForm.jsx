import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/Auth";

export default function useSigninForm() {
  const [connexion, setConnexion] = useState({
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
    role: "",
  });

  const history = useHistory();

  const handleChange = async (event) => {
    const { name, value } = event.target;
    await setConnexion((connexion) => ({
      ...connexion,
      [name]: value,
    }));
  };

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post(
        `http://localhost:5000/leboncoin/signin`,
        connexion
      );
      if (result.status === 200) {
        console.log("bien connecté", result.status);
        setConnexion({
          ...connexion,
          isSubmitting: true,
          errorMessage: null,
        });
        dispatch({ type: "SIGNIN", payload: result });
        if (result.data.user.role === "Vendeur") {
          history.push("/leboncoin/home/seller");
        } else {
          history.push("/leboncoin/home/buyer");
        }
      }
    } catch (error) {
      setConnexion({
        ...connexion,
        isSubmitting: false,
        errorMessage: error.response,
      });
    }
  };

  return {
    handleSubmit,
    handleChange,
    connexion,
  };
}
