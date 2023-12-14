import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./RecipeDetail.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
function RecipeDetail() {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  const [names, setNames] = useState([]);
  useEffect(() => {
    details.forEach((detail) => {
      var txt = "";
      var result = [];
      for (var i = 1; i < Number.MAX_VALUE; i++) {
        if (
          detail["strIngredient" + i.toString()] === "" ||
          detail["strMeasure" + i.toString()] === ""
        ) {
          break;
        }
        txt =
          detail["strMeasure" + i.toString()] +
          " " +
          detail["strIngredient" + i.toString()];
        result.push(txt);
      }
      setNames(result);
    });
  }, [details]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);
  return (
    <div className="detail-container">
      {details.map((detail) => (
        <div className="detail-card" key={detail.idMeal}>
          <div className="detail-img">
            <Link to="/recipes" className="prev-btn">Back to recipes list</Link>
            <img src={detail.strMealThumb} alt="no-pics"></img>
          </div>
          <div className="detail-content">
            <h1 className="detail-title">Ingredients</h1>
            <div className="ingredients">
              {names.map((name, index) => (
                <p key={index}>{name}</p>
              ))}
            </div>
            <a href={detail.strYoutube} className="tutorial">
              <span>
                <FontAwesomeIcon icon={faYoutube} />
              </span>{" "}
              <p>Tutorial</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeDetail;
