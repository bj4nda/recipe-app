import React, { useState } from "react";
import MealList from "./MealList";
import "./style/index.css"


function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const getMealData = text => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=616c7b1c8078425593abe673a9945856&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }


  
  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
      <div className="App" >
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData} style={{backgroundColor: '#c92e00', padding: '10px 0px'}}>Get Daily Meal Plan</button>
      </section>
        {mealData && <MealList mealData={mealData} />}
      </div>    
  );
}

export default App;
