import React, { useReducer } from "react";
import "./sass/App.scss";
import AuthContext from "./components/context/Auth";
import Header from "./components/pages/Header";
import Routes from "./components/Routes.jsx";
// import Footer from "./components/pages/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || {},
  user: null,
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
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
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

  return (
    <Router>
      <AuthContext.Provider value={authValue}>
        <Header />
        <Routes />
        {/* <Footer /> */}
      </AuthContext.Provider>
    </Router>
  );
}
