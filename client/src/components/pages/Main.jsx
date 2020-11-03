import React from "react";
import Nav from "../pages/Nav";
import Return from "./Return";
import Carousel from "../carousel/Carousel";
import mainImg from "../assets/img/main.jpg";
import targetBottom from "../assets/favicon/downward.svg";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
      <Nav />
      <div className="desktop-carousel">
        <Carousel />
      </div>
      <div className="desktop">
        <div className="desktop-return">
          <Return
            imgArrow={false}
            router2="/leboncoin"
            title="Bienvenue sur Leboncoin"
          />
        </div>
        <div className="desktop-divImg">
          <img src={mainImg} alt="" className="desktop-divImg-img" />
          <p>
            Venez vivre l'expérience avec <br /> cette plateforme de vente
          </p>
        </div>
        <div className="desktop-p">
          <p>
            Trouvez votre <span>bonheur</span>
          </p>
          <a href="#leboncoinText">
            <img src={targetBottom} alt="" className="desktop-p-img" />
          </a>
        </div>
        <div className="desktop-para">
          <p id="leboncoinText">
            Le Bon Coin est un site web d’annonces commerciales, fondé en
            France, durant l'année 2006, à l'initiative du conglomérat norvégien
            Schibsted. Son modèle économique repose sur la gratuité de son
            service pour les particuliers et la mise en relation de l'offre et
            de la demande locales.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
