import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/favicon/arrow.svg";
import error404 from "../../assets/img/error404.png";

export default function Error404() {
  return (
    <div className="allIn">
      <div className="allIn-error">
        <h1>
          ERROR <br /> 404
        </h1>
        <p className="allIn-error-para">
          La page que vous recherchez <br /> semble introuvable.
        </p>
        <div className="allIn-error-return">
          <Link to="/leboncoin" className="allIn-error-return-link">
            <div className="allIn-error-return-img">
              <img
                src={arrowIcon}
                alt="iconFleche"
                className="allIn-error-return-arrow"
              />
            </div>
            <div className="allIn-error-return-para">
              <p> BACK TO HOME</p>
            </div>
          </Link>
          <div className="allIn-error-return-div">
            <Link to="/leboncoin">
              <img
                src={error404}
                alt="imgDame"
                className="allIn-error-return-div-dame"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
