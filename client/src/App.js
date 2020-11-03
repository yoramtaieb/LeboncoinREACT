import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import "./sass/App.scss";
import AuthContext from "./components/atoms/context/Auth";
import UserContext from "./components/atoms/context/User";
import ProductContext from "./components/atoms/context/Product";
import reducer from "./components/atoms/reducer/Reducer";
import Routes from "./components/Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authValue = {
    state,
    dispatch,
  };

  const [user, setUser] = useState([]);
  const userValue = {
    user,
    setUser,
  };

  const [products, setProducts] = useState([]);
  const productValue = {
    products,
    setProducts,
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const result = await axios(`http://localhost:5000/leboncoin/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(result.data);
        dispatch({
          type: "LOAD_USER",
          payload: result.data,
        });
      }
    };
    fetchUser();
  }, []);

  return (
    <Router>
      <AuthContext.Provider value={authValue}>
        <UserContext.Provider value={userValue}>
          <ProductContext.Provider value={productValue}>
            <Routes />
          </ProductContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}
