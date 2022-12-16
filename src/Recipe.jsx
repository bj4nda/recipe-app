import {useEffect, useState, React} from 'react'
import { useLocation} from 'react-router-dom'
import "./index.css"


function Recipe() {
    const location = useLocation();
    const id = location.state.meal
    const [meal, setMeal] = useState("");


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=bbcf60d7df554ef9878099bbe1aa5b82&includeNutrition=false` 
    )
      .then((response) => response.json())
      .then((data) => {
        setMeal(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);


     
     return (
      <div className="image-container">
        <img style={{ width: "auto", }} src={meal.image} alt="recipe" className='image'></img>
        <p >pricePerServing {meal.pricePerServing}</p>
        <p>readyInMinutes {meal.readyInMinutes}</p>
        <p>servings {meal.servings} </p>
        <ul>
        {/* mealData.meals.map(meal => {
                return <Meal key={meal.id} meal={meal} />
        ) */}
        </ul>
      
      </div>
    );
  }
  



export default Recipe
