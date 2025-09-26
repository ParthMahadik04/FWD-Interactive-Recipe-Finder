import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Recipes from "./components/Recipes";
import { fetchRecipes } from "./api/api";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (ingredients) => {
    setError("");
    try {
      const data = await fetchRecipes(ingredients);
      setRecipes(data);
    } catch (err) {
      console.error(err);
      setError("⚠️ Could not fetch recipes. Please try again later.");
    }
  };
  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      <Recipes recipes={recipes} />
    </>
  )
}

export default App
