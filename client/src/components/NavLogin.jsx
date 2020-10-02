import React from "react";
import { NavLink } from "react-router-dom";
import arrowIcon from "../assets/favicon/arrow.svg";
import lebIcon from "../assets/favicon/Vector.svg";

export default function NavLogin({ titleLogin }) {
  return (
    <>
      <div className="return">
        <NavLink to="/leboncoin">
          <img src={arrowIcon} alt="arrowIcon" />
        </NavLink>
      </div>
      <div className="navSignup">
        <div className="navSignup-title">
          <NavLink to="/leboncoin">
            <img src={lebIcon} alt="lebIcon" />
          </NavLink>
          <h1>{titleLogin}</h1>
        </div>
      </div>
    </>
  );
}
