import React, { useState, useEffect } from "react";
import axios from "axios";
import Return from "../pages/Return";
import NavSeller from "../roleNav/NavSeller";

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

          <div className="product-map-name">
            
          </div>


          </div>
        ))}
      </div>
    </>
  );
}
