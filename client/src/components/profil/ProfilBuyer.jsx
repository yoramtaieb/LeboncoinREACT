import React, { useState } from "react";
import axios from "axios";
import NavBuyer from "../roleNav/NavBuyer";
import Return from "../pages/Return";
import Moment from "react-moment";
import "moment-timezone";
import { useEffect, useContext } from "react";
import UserContext from '../context/User'

export default function ProfilBuyer() {
  

    const userValue = useContext(UserContext)
 
    
//  useEffect(()=>{
//      console.log('user',user)
//  },[])

  return (
    <>
    <div>
      <NavBuyer />
      <Return
        title="Profil acheteur"
        router="/leboncoin/home/buyer"
        imgArrow={true}
      />
    </div>
     <div className="profil">
    
       <div className="profil-map">
         <div className="profil-map-champs">
           <div className="product-map-champs-firstName">
             <h4>{userValue.user.firstName}</h4>
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
