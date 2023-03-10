import {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import "./index.css"

function Recipe() {
  const location = useLocation()
  const id = location.state.meal
  const [meal, setMeal] = useState("")
  const [instructions, setInstructions] = useState("")

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=bbcf60d7df554ef9878099bbe1aa5b82&includeNutrition=false&includeInstructions=true`
    )
      .then(response => response.json())
      .then(data => {
        setMeal(data)
        setInstructions(data.instructions)
      })
      .catch(() => {
        console.log("error")
      })
  }, [id])

  return (
    <div className="image-container">
      <img
        style={{width: "auto"}}
        src={meal.image}
        alt="recipe"
        className="image"
      />
      <div className="info-container">
        <div className="info-item">
          <span className="info-label">Servings:</span>
          <span className="info-value">{meal.servings}</span>
        </div>
      </div>
      <ul>
        {/* {mealData.meals.map(meal => {
          return <Meal key={meal.id} meal={meal} />
        })} */}
      </ul>
      <div className="instructions">
        <h2>Instructions</h2>
        <ol>
          {instructions &&
            instructions
              .split(".")
              .map((step, index) => <li key={index}>{step.trim()}</li>)}
        </ol>
      </div>
    </div>
  )
}

export default Recipe
