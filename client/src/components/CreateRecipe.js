import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateRecipe() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prep_time: '',
    cook_time: '',
    servings: '',
    difficulty: 'medium',
    cuisine_type: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/recipes', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // TODO: Add ingredients to the recipe
      // TODO: Add instructions to the recipe
      // TODO: Add tags to the recipe

      navigate(`/recipes/${response.data.id}`);
    } catch (error) {
      console.error('Error creating recipe:', error);
      // TODO: Show error message
    }
  };

  return (
    <div className="create-recipe">
      <h1>Create New Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Prep Time (minutes):</label>
          <input
            type="number"
            name="prep_time"
            value={formData.prep_time}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cook Time (minutes):</label>
          <input
            type="number"
            name="cook_time"
            value={formData.cook_time}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Servings:</label>
          <input
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Difficulty:</label>
          <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label>Cuisine Type:</label>
          <input
            type="text"
            name="cuisine_type"
            value={formData.cuisine_type}
            onChange={handleChange}
          />
        </div>

        {/* TODO: Add ingredient input fields */}
        {/* TODO: Add instruction input fields */}
        {/* TODO: Add image upload */}

        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;