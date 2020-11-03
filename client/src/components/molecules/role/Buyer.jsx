import React from "react";
import NavBuyer from "../../organisms/NavBuyer";
import Categories from "../../molecules/categories/Categories";
import Cities from "../../molecules/cities/Cities";
import Return from "../../pages/Return";
import Carousel from "../../carousel/Carousel";
import Footer from "../../pages/Footer";

export default function Buyer() {
  return (
    <>
      <NavBuyer />
      <div className="desktop-carousel">
        <Carousel />
      </div>
      <div className="buyerMain">
        <Return
          title="Acheteur"
          router2="/leboncoin/home/buyer"
          imgArrow={false}
        />
        <Categories />
        <Cities />
        <Footer />
      </div>
    </>
  );
}
