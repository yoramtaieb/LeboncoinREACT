import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/favicon/arrow.svg";
import error404 from "../../../assets/img/error404.png";

export default function Error404() {
  return (
    <div className="error">
      <h1>
        ERROR <br /> 404
      </h1>
      <p className="error-para">
        La page que vous recherchez <br /> semble introuvable.
      </p>
      <div className="error-return">
        <Link to="/leboncoin" className="error-return-link">
          <div className="error-return-img">
            <img
              src={arrowIcon}
              alt="iconFleche"
              className="error-return-arrow"
            />
          </div>
          <div className="error-return-para">
            <p> BACK TO HOME</p>
          </div>
        </Link>
        <Link to="/leboncoin">
          <img src={error404} alt="imgDame" className="error-return-dame" />
        </Link>
      </div>
    </div>
  );
}
