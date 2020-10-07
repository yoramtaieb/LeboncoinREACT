import React from "react";
import Nav from "../pages/Nav";
import Return from "./Return";

export default function Main() {
  return (
    <div>
      <Nav />
      <Return imgArrow={false} title="Bienvenue sur Leboncoin" />
    </div>
  );
}
