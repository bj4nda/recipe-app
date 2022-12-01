import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=bbcf60d7df554ef9878099bbe1aa5b82&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
  console.log(meal.id)
  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <div>
      </div>
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>  
      
    {/*  import {Link} from 'react-router-dom'

<Link to={`/recipe/${meal.id}`} state={{ meal: meal.id }}>Recipe</Link>
 */ }

{/*       <a target="blank" rel="noopener noreferrer" href={meal.sourceUrl}>Go to Recipe</a>
 */}      <Link to={`/recipe`} state={{ meal: meal.id }}> Recipe Page </Link>
    </article>
  );
}
