import React from "react";
import Return from "../pages/Return";
import NavSeller from "../roleNav/NavSeller";

export default function Product() {
  return (
    <div>
      <NavSeller />
      <Return
        title="Tous mes produits"
        router="/leboncoin/home/seller/product"
        imgArrow={true}
      />
    </div>
  );
}
