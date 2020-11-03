import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import axios from "axios";
import NavBuyer from "../../organisms/NavBuyer";
import Return from "../Return";
import ModaleDeleteUser from "../../organisms/ModaleDeleteUser";
import ModaleUpdateUser from "../../organisms/ModaleUpdateUser";
import Carousel from "../../carousel/Carousel";
import Footer from "../Footer";

export default function ProfilBuyer() {
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
    };
    fetchUser();
  }, []);

  return (
    <>
      <NavBuyer />
      <div className="desktop-carousel">
        <Carousel />
      </div>
      <div className="buyer">
        <div>
          <Return
            title="Profil"
            router="/leboncoin/home/buyer"
            router2="/leboncoin/home/buyer"
            imgArrow={true}
          />
        </div>
        <h2 className="formProduct-titre">Vue d'ensemble du compte</h2>
        <div className="formProduct-divLigne1">
          <hr className="formProduct-ligne1" />
        </div>
        <div className="buyer-map">
          <div className="buyer-map-champs">
            <div className="buyer-map-champs-firstName">
              <h3 style={{ textTransform: "capitalize" }}>Prénom :</h3>
              <h4
                className="buyer-map-champs-firstName-h4"
                style={{ textTransform: "capitalize" }}
              >
                {user.firstName}
              </h4>
            </div>
            <div className="buyer-map-champs-lastName">
              <h3>Nom : </h3>
              <h4
                className="buyer-map-champs-lastName-h4"
                style={{ textTransform: "capitalize" }}
              >
                {user.lastName}
              </h4>
            </div>
            <div className="buyer-map-champs-email">
              <h3>Email :</h3>
              <h4 className="buyer-map-champs-email-h4">{user.email}</h4>
            </div>
            <div className="buyer-map-champs-birthday">
              <h3>Date de naissance :</h3>
              <h4 className="buyer-map-champs-birthday-h4">
                <Moment format="D MMM YYYY" withTitle>
                  {user.birthday}
                </Moment>
              </h4>
            </div>
            <div className="buyer-map-champs-role">
              <h3>Rôle :</h3>
              <h4 className="buyer-map-champs-role-h4">{user.role}</h4>
            </div>
          </div>
          <div className="formProduct-divLigne2">
            <hr className="formProduct-ligne2" />
          </div>
        </div>
        <div className="buyer-modale">
          <ModaleDeleteUser />
          <ModaleUpdateUser />
        </div>
        <Footer />
      </div>
    </>
  );
}
