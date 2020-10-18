import React from "react";
import NavSeller from "../roleNav/NavSeller";
import Search from "../recherche/Search";
import Categories from "../categories/Categories";
import Map from "../map/Map";

export default function Seller() {
  return (
    <div>
      <NavSeller />
      <Search />
      <Categories />
      <Map />
    </div>
  );
}
