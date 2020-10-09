import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import "./sass/App.scss";
import AuthContext from "./components/context/Auth";
import UserContext from "./components/context/User"
// import Header from "./components/pages/Header";
import Routes from "./components/Routes.jsx";
// import Footer from "./components/pages/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
 console.log("ICI ACTION :", action);
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        user: action.payload
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
      case "LOAD_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default function App() {
  // Authentification
  const [state, dispatch] = useReducer(reducer, initialState);
  const authValue = {
    state,
    dispatch,
  };

  const [user, setUser]= useState([]);
  const userValue = {
    user,
    setUser,
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
        setUser(result.data)
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
        {/* <Header /> */}
        <Routes />
        {/* <Footer /> */}
         </UserContext.Provider>
      </AuthContext.Provider>
     
    </Router>
  );
}
