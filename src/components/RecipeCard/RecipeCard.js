import { Link } from "react-router-dom";
import "./RecipeCard.css";
  
function RecipeCard({recipe}) {
  
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.strMealThumb} alt="no-pics"></img>
      </div>
      <div className="recipe-description">
        <div className="recipe-title">
          <p>{recipe.strMeal}</p>
          <ul>
            <li className="category">
             Category: {recipe.strCategory}
            </li>
            <li className="area">
            Area: {recipe.strArea}
            </li>
          </ul>
        </div>
        <div className="recipe-info">
          <Link to={`/recipes/${recipe.strMeal}`} className="details">
            Ingredients
          </Link>
          <a href={recipe.strSource} className="URL">
            Recipe URL
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
