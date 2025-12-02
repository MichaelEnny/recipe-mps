import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`/api/recipes/${id}`);
      setRecipe(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div className="recipe-info">
        <div>Prep Time: {recipe.prep_time} minutes</div>
        <div>Cook Time: {recipe.cook_time} minutes</div>
        <div>Servings: {recipe.servings}</div>
        <div>Difficulty: {recipe.difficulty}</div>
        <div>Cuisine: {recipe.cuisine_type}</div>
      </div>

      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients?.map(ing => (
            <li key={ing.id}>
              {ing.quantity} {ing.unit} {ing.name}
              {ing.notes && <span> ({ing.notes})</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="instructions">
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions?.map(inst => (
            <li key={inst.id}>{inst.instruction}</li>
          ))}
        </ol>
      </div>

      {/* TODO: Add rating/review section */}
      {/* TODO: Add "Add to favorites" button */}
      {/* TODO: Add "Add to meal plan" button */}
      {/* TODO: Add nutrition information */}
    </div>
  );
}

export default RecipeDetail;