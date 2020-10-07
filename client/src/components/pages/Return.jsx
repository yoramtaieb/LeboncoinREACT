import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/favicon/arrow.svg";
import lebIcon from "../../assets/favicon/Vector.svg";

export default function Return({ title, router = "/leboncoin", imgArrow }) {
  return (
    <>
      <div className="return">
        <Link to={`${router}`}>
          {imgArrow ? <img src={`${arrowIcon}`} alt="arrowIcon" /> : null}
        </Link>
      </div>
      <div className="navSignup">
        <div className="navSignup-title">
          <Link to="/leboncoin">
            <img src={lebIcon} alt="lebIcon" />
          </Link>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
}
