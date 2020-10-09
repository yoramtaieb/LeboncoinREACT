import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import NavSeller from "../roleNav/NavSeller";
import Return from "../pages/Return";
import UserContext from '../context/User'
import { useContext } from "react";

export default function ProfilSeller() {
  
  const userValue = useContext(UserContext)

  return (
    <>
      <div>
        <NavSeller />
        <Return
          title="Profil vendeur"
          router="/leboncoin/home/seller"
          imgArrow={true}
        />
      </div>

      <h2 className="formProduct-titre">Mon profil</h2>
      <div className="formProduct-divLigne1">
        <hr className="formProduct-ligne1" />
      </div>

      <div className="profil">
        
          <div className="profil-map">
            <div className="profil-map-champs">
              <div className="product-map-champs-firstName">
                <h4>{userValue.user.firstName}</h4>
                {/* <h4>{user.firstName}</h4> */}
              </div>

              {/* <div className="profil-map-champs-lastName">
                <h4>{profil.lastName}</h4>
              </div>

              <div className="profil-map-champs-email">
                <h4>{profil.email}</h4>
              </div>

              <div className="profil-map-champs-birthday">
                <h4>
                  <Moment format="D MMM YYYY" withTitle>
                    {profil.birthday}
                  </Moment>
                </h4>
              </div>

              <div className="profil-map-champs-role">
                <h4>{profil.role}</h4>
              </div> */}
            </div>
          </div>
     
      </div>
    </>
  );
}
