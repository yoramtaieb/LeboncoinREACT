import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  const [, setCategorieName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "http://localhost:5000/leboncoin/categories/all"
        );
        setAllCategories(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="categorie">
        <h1>Top catégories</h1>
        {allCategories.map((category) => (
          <div className="categorie-all">
            <div className={"categorie-all-" + category.name}>
              <Link
                onClick={() => {
                  setCategorieName(category.name);
                }}
                to={"/leboncoin/home/product/categorie/" + category.name}
              >
                <div className={"categorie-all-" + category.name + "-para"}>
                  <p>{category.name}</p>
                </div>
                <img
                  src={require("../../assets/img/" + category.name + ".png")}
                  alt="img car"
                />
              </Link>
            </div>
          </div>
        ))}{" "}
      </div>
    </>
  );
}
