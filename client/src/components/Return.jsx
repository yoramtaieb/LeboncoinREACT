import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/favicon/arrow.svg";
import lebIcon from "../assets/favicon/Vector.svg";

export default function NavLogin({ titleLogin }) {
  return (
    <>
      <div className="return">
        <Link to="/leboncoin">
          <img src={arrowIcon} alt="arrowIcon" />
        </Link>
      </div>
      <div className="navSignup">
        <div className="navSignup-title">
          <Link to="/leboncoin">
            <img src={lebIcon} alt="lebIcon" />
          </Link>
          <h1>{titleLogin}</h1>
        </div>
      </div>
    </>
  );
}
