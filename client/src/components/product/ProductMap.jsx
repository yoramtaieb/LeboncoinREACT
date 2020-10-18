import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductMap() {
  const [productCategory, setProductCategory] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `http://localhost:5000/leboncoin/product/citie/${name}`
        );
        setProductCategory(result.data);
        console.log("====>", result.data);
      } catch (error) {
        console.log(error);
        // setProductError(productError.response.data);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {productCategory.map((data) => (
        <h1>{data.City.name}</h1>
      ))}
    </>
  );
}
