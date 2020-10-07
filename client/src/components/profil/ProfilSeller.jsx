import React from "react";
import NavSeller from "../roleNav/NavSeller";
import Return from "../pages/Return";

export default function ProfilSeller() {
  return (
    <div>
      <NavSeller />
      <Return
        title="Profil vendeur"
        router="/leboncoin/home/seller"
        imgArrow={true}
      />
    </div>
  );
}
