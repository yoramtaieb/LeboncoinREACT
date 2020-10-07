import React from "react";

export default function Search() {
  return (
    <div className="inputSearch">
      <form action="" className="inputSearch-formSearch">
        <div className="inputSearch-formSearch">
          <div className="inputSearch-formSearch-inputButton">
            <div className="inputSearch-formSearch-inputButton-input">
              <input type="search" placeholder="Où allez-vous ?" />
            </div>
            <button type="submit">
              <span className="span">&#8981;</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
