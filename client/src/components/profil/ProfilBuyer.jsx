import React from "react";
import NavBuyer from "../roleNav/NavBuyer";
import Return from "../pages/Return";

export default function ProfilBuyer() {
  return (
    <div>
      <NavBuyer />
      <Return
        title="Profil acheteur"
        router="/leboncoin/home/buyer"
        imgArrow={true}
      />
    </div>
  );
}
