import React, { useState, useEffect } from "react";
import axios from "axios";
import Return from "../pages/Return";
import NavSeller from "../roleNav/NavSeller";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";
import ModaleDeleteProduct from "./ModaleDeleteProduct";
import ModaleUpdatedProduct from "./ModaleUpdateProduct";
export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/leboncoin/product");
      setProducts(result.data);
      console.log("je suis le console log", result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <NavSeller />
        <Return
          title="Mes produits"
          router="/leboncoin/home/seller/product"
          imgArrow={true}
        />
      </div>

      <h2 className="formProduct-titre">
        Liste de tous mes <br /> produits mis en ligne
      </h2>
      <div className="formProduct-divLigne1">
        <hr className="formProduct-ligne1" />
      </div>

      <div className="product">
        {products.map((product) => (
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
                  Nom : <span>{product.name}</span>
                </h5>
              </div>

              <div className="product-map-champs-price">
                <h5>
                  Prix : <span>{product.price}€</span>
                </h5>
              </div>
              <div className="product-map-champs-description">
                <h5>
                  Description : <span>{product.description}</span>
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
              <div className="product-map-champs-button">
                <div className="product-map-champs-button-delete">
                  <ModaleDeleteProduct />
                </div>
                <div className="product-map-champs-button-update">
                  <ModaleUpdatedProduct />
                </div>
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
