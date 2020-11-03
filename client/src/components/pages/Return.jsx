import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/favicon/arrow.svg";
import lebIcon from "../assets/favicon/Vector.svg";

export default function Return({
  title,
  router = "/leboncoin",
  router2 = "/leboncoin",
  imgArrow,
}) {
  return (
    <>
      <div className="return">
        <Link to={`${router}`}>
          {imgArrow ? (
            <img
              src={`${arrowIcon}`}
              alt="arrowIcon"
              className="return-imgArrow"
            />
          ) : null}
        </Link>
      </div>
      <div className="navSignup">
        <div className="navSignup-title">
          <Link to={`${router2}`}>
            <img
              src={lebIcon}
              alt="lebIcon"
              className="navSignup-title-imgLeb"
            />
          </Link>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
}
