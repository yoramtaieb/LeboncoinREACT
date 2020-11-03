import React from "react";
import NavSeller from "../../organisms/NavSeller";
import Categories from "../../molecules/categories/Categories";
import Cities from "../../molecules/cities/Cities";
import Return from "../../pages/Return";
import Carousel from "../../carousel/Carousel";
import Footer from "../../pages/Footer";

export default function Seller() {
  return (
    <>
      <NavSeller />
      <div className="desktop-carousel">
        <Carousel />
      </div>
      <div className="sellerMain">
        <Return
          title="Vendeur"
          router2="/leboncoin/home/seller"
          imgArrow={false}
        />
        <Categories />
        <Cities />
        <Footer />
      </div>
    </>
  );
}
