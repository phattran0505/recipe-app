import { useEffect, useState } from "react";

import RecipeCard from "../RecipeCard/RecipeCard";

import "./RecipeContainer.css";
import SearchBar from "../SearchBar/SearchBar";
function RecipeContainer() {
  // const apiURL="https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const searchRecipes=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setRecipes(data.meals)
    })
    .catch(err=>{
      console.log("error");
    })
  }  
  
  useEffect(()=>{
    searchRecipes()
  },[recipes])

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes()
  };
  return (
    <div className="recipe-container">
      <SearchBar
        handleSubmit={handleSubmit}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div className="recipe-content">
        <h1>recipe list</h1>
        <div className="content">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeContainer;
