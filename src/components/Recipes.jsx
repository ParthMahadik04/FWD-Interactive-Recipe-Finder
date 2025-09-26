// src/components/Recipes.jsx
import React from "react";

const Recipes = ({ recipes }) => {
  if (!recipes.length) {
    return <p style={{ textAlign: "center" }}>No recipes found. Try different ingredients!</p>;
  }

  return (
    <section className="recipes-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <div className="recipe-info">
            <h3>{recipe.title}</h3>
            <a
              href={`https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, "-")}-${recipe.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Recipe
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Recipes;
