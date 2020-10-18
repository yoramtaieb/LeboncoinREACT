import React from "react";
import NavBuyer from "../roleNav/NavBuyer";
import Search from "../recherche/Search";
import Categories from "../categories/Categories";
import Map from "../map/Map";

export default function Buyer() {
  return (
    <>
      <NavBuyer />
      <Search />
      <Categories />
      <Map />
    </>
  );
}
