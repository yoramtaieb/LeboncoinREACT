import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import Return from "../pages/Return";
import NavProduct from "../productNav/NavProduct";
import logoProduct from "../../assets/img/le_bon_coin_logo.png";
import plusLogo from "../../assets/favicon/plusProduct.svg";

export default function AddProduct() {
  const history = useHistory();

  const [product, setProduct] = useState({
    idCity: parseInt("1"),
    idCategory: parseInt("1"),
    name: "",
    description: "",
    price: parseInt(""),
    image: "",
    isPosted: false,
    errorMessage: null,
  });

  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(logoProduct);
  const [allCities, setAllCities] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "http://localhost:5000/leboncoin/cities/all"
        );
        setAllCities(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "http://localhost:5000/leboncoin/categories/all"
        );
        setAllCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    console.log(value);
    await setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleChangeFile = async (event) => {
    const [imageFile] = event.target.files;
    try {
      Resizer.imageFileResizer(
        imageFile,
        750,
        1500,
        "JPEG",
        50,
        0,
        (compressedFile) => {
          setProductImage({ image: compressedFile });
          setPreviewImage(URL.createObjectURL(compressedFile));
        },
        "blob",
        750,
        750
      );
    } catch (error) {}
  };

  const token = localStorage.getItem("token");
  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("image", productImage.image);
      formData.append("idCity", product.idCity);
      formData.append("idCategory", product.idCategory);
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      console.log(formData);
      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.post(
        "http://localhost:5000/leboncoin/product",
        formData,
        options
      );
      if (result.status === 201) {
        console.log("article bien posté", result.status);
        setProduct({
          ...product,
          isPosted: true,
          errorMessage: null,
        });
        history.push("/leboncoin/home/seller/product/all");
      }
    } catch (error) {
      setProduct({
        ...product,
        isPosted: false,
        errorMessage: error.response,
      });
    }
  };

  return (
    <>
      <NavProduct />
      <Return
        title="Vendre un produit"
        router="/leboncoin/home/seller"
        imgArrow={true}
      />
      <div className="formProduct">
        <h2 className="formProduct-titre">
          Déposer une annonce <br /> sur la plateforme
        </h2>
        <div className="formProduct-divLigne1">
          <hr className="formProduct-ligne1" />
        </div>

        <form onSubmit={onSubmit} className="formProduct-formGen">
          <div className="formProduct-preview">
            <div className="formProduct-preview2">
              <label htmlFor="file" className="formProduct-formGen-label1">
                Choisir une image
                <img
                  src={plusLogo}
                  alt="iconePlus"
                  className="formProduct-formGen-label1-img"
                />
                <div className="formProduct-input1">
                  <input
                    className="preview_input"
                    type="file"
                    name="image"
                    id="file"
                    onChange={handleChangeFile}
                    required
                  />
                </div>
              </label>
              <div className="formProduct-preview1">
                <img
                  src={previewImage}
                  alt="Prévisualisation du produit"
                  className="formProduct-preview-image"
                />
              </div>
            </div>
          </div>
          <label htmlFor="name" className="formProduct-formGen-label4">
            Nom
          </label>
          <div className="formProduct-input4">
            <input
              name="name"
              onChange={handleChange}
              value={product.name}
              type="text"
              placeholder="Ajoutez un nom"
            />
          </div>
          <label htmlFor="description" className="formProduct-formGen-label5">
            Description
          </label>
          <div className="formProduct-input5">
            <input
              name="description"
              onChange={handleChange}
              value={product.descripton}
              type="text"
              placeholder="Ajoutez une description"
            />
          </div>
          <label htmlFor="price" className="formProduct-formGen-label6">
            Prix
          </label>
          <div className="formProduct-input6">
            <input
              name="price"
              onChange={handleChange}
              value={product.price}
              type="number"
              placeholder="Ajoutez un prix"
            />
          </div>
          <label htmlFor="idCategory" className="formProduct-formGen-label3">
            Catégories
          </label>
          <div className="formProduct-input3">
            <select name="idCategory" onChange={handleChange}>
              <option value="">--Choisissez une catégorie--</option>
              {allCategories.map((category, index) => (
                <option key={index} value={`${category.id}`}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="idCity" className="formProduct-formGen-label2">
            Régions
          </label>
          <div className="formProduct-input2">
            <select name="idCity" onChange={handleChange}>
              <option value="">--Choisissez une région--</option>
              {allCities.map((city, index) => (
                <option key={index} value={`${city.id}`}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          {product.errorMessage && (
            <span className="formSignin-error">
              {product.errorMessage.data.description}
            </span>
          )}
          <div className="formProduct-buttonDiv">
            <div className="formProduct-divLigne2">
              <hr className="formProduct-ligne2" />
            </div>
            <div className="formProduct-buttonDiv-buttonDiv2">
              <button
                type="submit"
                className="formProduct-buttonDiv-buttonDiv2-button"
              >
                Ajouter le produit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
