import React from "react";
import desk1 from "../assets/desktopResponsive/desktop1.png";
import desk2 from "../assets/desktopResponsive/desktop2.png";
import desk3 from "../assets/desktopResponsive/desktop3.png";
import desk4 from "../assets/desktopResponsive/desktop4.png";
import desk5 from "../assets/desktopResponsive/desktop5.png";
import desk6 from "../assets/desktopResponsive/desktop6.png";
import desk7 from "../assets/desktopResponsive/desktop7.png";
import desk8 from "../assets/desktopResponsive/desktop8.png";
import desk9 from "../assets/desktopResponsive/desktop9.png";

export default function Carousel() {
  return (
    <>
      <div className="carousel">
        <div className="carousel-first">
          <div className="carousel-first-divImg1">
            <img src={desk1} alt="" />
          </div>

          <div className="carousel-first-divImg2">
            <img src={desk2} alt="" />
          </div>
          <div className="carousel-first-divImg3">
            <img src={desk9} alt="" />
          </div>
        </div>

        <div className="carousel-second">
          <div className="carousel-second-divImg1">
            <img src={desk3} alt="" />
          </div>

          <div className="carousel-second-divImg2">
            <img src={desk4} alt="" />
          </div>
          <div className="carousel-second-divImg3">
            <img src={desk8} alt="" />
          </div>
        </div>

        <div className="carousel-third">
          <div className="carousel-third-divImg1">
            <img src={desk5} alt="" />
          </div>

          <div className="carousel-third-divImg2">
            <img src={desk6} alt="" />
          </div>

          <div className="carousel-third-divImg3">
            <img src={desk7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
