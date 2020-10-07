import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import Return from "../pages/Return";
import NavProduct from "../productNav/NavProduct";
// import imgTest from "../../assets/favicon/product.svg";

export default function AddProduct() {
  const history = useHistory();

  const [product, setProduct] = useState({
    idCity: parseInt("1"),
    idCategory: parseInt("1"),
    name: "",
    description: "",
    price: parseInt("0"),
    image: "",
  });

  const [productImage, setProductImage] = useState(null);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setProduct({
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
          // setPreviewImage(URL.createObjectURL(compressedFile));
        },
        "blob",
        750,
        750
      );
    } catch (error) {
      console.log(error);
    }
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

      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(
        "http://localhost:5000/leboncoin/product",
        formData,
        options
      );
      history.push("/leboncoin/home/seller/product/all");
    } catch (error) {
      history.push("/error");
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
      <div>
        <form onSubmit={onSubmit}>
          <div>
            {/* <img
              src={previewImage}
              alt="Prévisualisation de l'illustration de profile du DJ"
            /> */}
            <label htmlFor="file" className="preview_label">
              <input
                className="preview_input"
                type="file"
                name="image"
                id="file"
                onChange={handleChangeFile}
                required
              />
            </label>
          </div>

          <label htmlFor="idCity">
            Villes
            <select
              name="idCity"
              value={product.idCity}
              onChange={handleChange}
            >
              <option value="1">Alsace</option>
              <option value="2">Aquittaine</option>
              <option value="3">Auverge</option>
              <option value="4">Basse-Normandie</option>
              <option value="5">Bourgogne</option>
              <option value="6">Bretagne</option>
              <option value="7">Centre</option>
              <option value="8">Champagne-Ardenne</option>
              <option value="9">Corse</option>
              <option value="10">Franche-Comté</option>
              <option value="11">Haute-Normandie</option>
              <option value="12">Île-de-France</option>
              <option value="13">Languedoc-Roussillon</option>
              <option value="14">Limousin</option>
              <option value="15">Lorraine</option>
              <option value="16">Midi-Pyrénées</option>
              <option value="17">Nord-Pas-de-Calais</option>
              <option value="18">Pays de la Loire</option>
              <option value="19">Picardie</option>
              <option value="20">Poitou-Charentes</option>
              <option value="21">Provence-Alpes-Côtes d'Azur</option>
              <option value="22">Rhônes-Alpes</option>
            </select>
          </label>
          <label htmlFor="idCategory">
            Catégories
            <select
              name="idCategory"
              value={product.idCategory}
              onChange={handleChange}
            >
              <option value="1">Informatique</option>
              <option value="2">Voiture</option>
              <option value="3">Ameublement</option>
              <option value="4">Vente Immo</option>
            </select>
          </label>
          <label htmlFor="name">
            Nom
            <input
              name="name"
              onChange={handleChange}
              value={product.name}
              type="text"
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              name="description"
              onChange={handleChange}
              value={product.descripton}
              type="text"
            />
          </label>
          <label htmlFor="price">
            Prix
            <input
              name="price"
              onChange={handleChange}
              value={product.price}
              type="number"
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
}
