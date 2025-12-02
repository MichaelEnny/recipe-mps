import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    cuisine: '',
    difficulty: ''
  });

  useEffect(() => {
    fetchRecipes();
  }, [filters]);

  const fetchRecipes = async () => {
    try {
      const params = {};
      if (filters.cuisine) params.cuisine = filters.cuisine;
      if (filters.difficulty) params.difficulty = filters.difficulty;

      const response = await axios.get('/api/recipes', { params });
      setRecipes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      // TODO: Show error message to user
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-list">
      <h1>Recipes</h1>

      <div className="filters">
        <select name="cuisine" value={filters.cuisine} onChange={handleFilterChange}>
          <option value="">All Cuisines</option>
          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
          <option value="mexican">Mexican</option>
          {/* TODO: Load cuisine options from API */}
        </select>

        <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange}>
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* TODO: Add search functionality */}
        {/* TODO: Add filter by tags */}
        {/* TODO: Add filter by prep time */}
      </div>

      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <div className="recipe-meta">
              <span>Prep: {recipe.prep_time} min</span>
              <span>Cook: {recipe.cook_time} min</span>
              <span>Difficulty: {recipe.difficulty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;