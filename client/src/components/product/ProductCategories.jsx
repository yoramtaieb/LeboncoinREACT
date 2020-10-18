import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";
import axios from "axios";
import Return from "../pages/Return";
import NavSeller from "../roleNav/NavSeller";
import NavBuyer from "../roleNav/NavBuyer";

export default function ProductCategories() {
  const [productCategory, setProductCategory] = useState([]);
  const [productError, setProductError] = useState("");
  const { name } = useParams();

  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const foundUser = await axios(`http://localhost:5000/leboncoin/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(foundUser.data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `http://localhost:5000/leboncoin/product/categorie/${name}`
        );
        setProductCategory(result.data);
        console.log("===>", result);
      } catch (productError) {
        setProductError(productError.response.data);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        {user.role === "Vendeur" ? (
          <Return
            title="Catégorie"
            imgArrow={true}
            router="/leboncoin/home/seller"
          />
        ) : (
          <Return
            title="Catégorie"
            imgArrow={true}
            router="/leboncoin/home/buyer"
          />
        )}
      </div>
      <div>{user.role === "Vendeur" ? <NavSeller /> : <NavBuyer />}</div>
      <h2 className="formProduct-titre">
        Liste des produits <br /> par catégories
      </h2>
      <div className="formProduct-divLigne1">
        <hr className="formProduct-ligne1" />
      </div>
      <div className="product-error">
        {productError !== "" ? (
          <div className="product-error-spanAll">
            <span className="product-error-spanAll-span">
              {productError.title}
            </span>
            <span className="product-error-spanAll-span">
              {productError.description}
            </span>
          </div>
        ) : null}
      </div>
      <div className="product">
        {productCategory.map((product) => (
          <div key={product.id} className="product-map">
            <div className="product-map-preview">
              <img
                src={product.uploadPicture}
                alt="imgProduct"
                className="product-map-preview-image"
              />
            </div>

            <div className="product-map-champs">
              <div className="product-map-champs-name">
                <h5>
                  Nom :{" "}
                  <span style={{ textTransform: "capitalize" }}>
                    {product.name}
                  </span>
                </h5>
              </div>

              <div className="product-map-champs-price">
                <h5>
                  Prix : <span>{product.price}€</span>
                </h5>
              </div>
              <div className="product-map-champs-description">
                <h5>
                  Description :{" "}
                  <span style={{ textTransform: "capitalize" }}>
                    {product.description}
                  </span>
                </h5>
              </div>
              <div className="product-map-champs-category">
                <h5>
                  Catégorie : <span>{product.Category.name}</span>
                </h5>
              </div>
              <div className="product-map-champs-city">
                <h5>
                  Région : <span>{product.City.name}</span>
                </h5>
              </div>
              <div className="product-map-champs-createdAt">
                <h5>Mis en ligne : </h5>
                <span className="product-map-champs-createdAt-span">
                  <Moment
                    locale="de"
                    fromNow
                    className="product-map-champs-createdAt-h5"
                  >
                    {product.createdAt}
                  </Moment>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="formProduct-divLigne2">
          <hr className="formProduct-ligne2" />
        </div>
      </div>
    </>
  );
}
