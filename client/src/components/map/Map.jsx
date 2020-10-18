import React, { useState, useEffect } from "react";
import map from "../../assets/img/map.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Map() {
  const [allCities, setAllCities] = useState([]);
  const [, setState] = useState();

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
    setState("");
  }, []);

  return (
    <>
      {/* <div className="city">
        <div className="city-img">
          <img src={map} alt="mapFrance" />
        </div>

        <div className="city-all">
          <select name="idCity" className="city-all-select">
            <option value="">--Choisissez une région--</option>
            {allCities.map((city, index) => (
              <option key={index} value={`${city.id}`}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div> */}
    </>
  );
}
