import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import map from "../../assets/img/map.svg";

export default function Map() {
  const [allCities, setAllCities] = useState([]);
  const history = useHistory();

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

  const handleChange = async (event) => {
    history.push("/leboncoin/home/product/citie/" + event.target.value);
  };

  return (
    <>
      <div className="city">
        <div className="city-divImg">
          <img src={map} alt="mapFrance" className="city-divImg-img" />
        </div>

        <div className="city-all">
          <select
            onChange={handleChange}
            name="idCity"
            className="city-all-select"
          >
            <option value="">Choisissez une région</option>
            {allCities.map((city, index) => (
              <option key={index + 1} value={`${city.name}`}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
