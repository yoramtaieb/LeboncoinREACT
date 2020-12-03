import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import axios from "axios";
import NavSeller from "../../organisms/NavSeller";
import Return from "../Return";
import ModaleDeleteUser from "../../organisms/ModaleDeleteUser";
import ModaleUpdateUser from "../../organisms/ModaleUpdateUser";
import Carousel from "../../carousel/Carousel";
import Footer from "../Footer";

export default function ProfilSeller() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const foundUser = await axios(`http://localhost:5000/leboncoin/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(foundUser.data);
      console.log("===>", foundUser);
    };
    fetchUser();
  }, []);

  return (
    <>
      <NavSeller />
      <div className="desktop-carousel">
        <Carousel />
      </div>
      <div className="seller">
        <div>
          <Return
            title="Profil"
            router="/leboncoin/home/seller"
            router2="/leboncoin/home/seller"
            imgArrow={true}
          />
        </div>
        <h2 className="formProduct-titre">Vue d'ensemble du compte</h2>
        <div className="formProduct-divLigne1">
          <hr className="formProduct-ligne1" />
        </div>
        <div className="seller-map">
          <div className="seller-map-champs">
            <div className="seller-map-champs-firstName">
              <h3>Prénom :</h3>
              <h4
                className="seller-map-champs-firstName-h4"
                style={{ textTransform: "capitalize" }}
              >
                {user.firstName}
              </h4>
            </div>
            <div className="seller-map-champs-lastName">
              <h3>Nom : </h3>
              <h4
                className="seller-map-champs-lastName-h4"
                style={{ textTransform: "capitalize" }}
              >
                {user.lastName}
              </h4>
            </div>
            <div className="seller-map-champs-email">
              <h3>Email :</h3>
              <h4 className="seller-map-champs-email-h4">{user.email}</h4>
            </div>
            <div className="seller-map-champs-birthday">
              <h3>Date de naissance :</h3>
              <h4 className="seller-map-champs-birthday-h4">
                <Moment format="D MMM YYYY" withTitle>
                  {user.birthday}
                </Moment>
              </h4>
            </div>
            <div className="seller-map-champs-role">
              <h3>Rôle :</h3>
              <h4 className="seller-map-champs-role-h4">{user.role}</h4>
            </div>
            <div className="seller-map-champs-role">
              <h3>Date de création :</h3>
              <h4 className="seller-map-champs-role-h4">
                <Moment locale="de" fromNow>
                  {user.createdAt}
                </Moment>
              </h4>
            </div>
          </div>
          <div className="formProduct-divLigne2">
            <hr className="formProduct-ligne2" />
          </div>
        </div>
        <div className="seller-modale">
          <ModaleDeleteUser />
          <ModaleUpdateUser />
        </div>
        <Footer />
      </div>
    </>
  );
}
