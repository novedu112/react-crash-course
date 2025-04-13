import "./App.css";
import { Card } from "./components/Card";
import { MainLayout } from "./layouts/MainLayout";
import { SearchForm } from "./components/SearchForm";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  const [meals, setMeals] = useState([]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }); 


  
  };

  return (
    <MainLayout>
      <SearchForm
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {meals.length === 0 && <p className="text-center text-gray-500">No meals found</p>} 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {meals.map((meal) => (
        <Card
          key={meal.idMeal}
          title={meal.strMeal}
          image={meal.strMealThumb}
          description={meal.strInstructions.slice(0, 100) + "..."}
        />
      ))}
    </div>

    </MainLayout>
  );
}

export default App;
