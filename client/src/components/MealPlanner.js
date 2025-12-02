import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MealPlanner() {
  const [mealPlans, setMealPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const fetchMealPlans = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/meal-plans', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMealPlans(response.data);
    } catch (error) {
      console.error('Error fetching meal plans:', error);
    }
  };

  const handleCreatePlan = async (planData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/meal-plans', planData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchMealPlans();
      setShowCreateForm(false);
    } catch (error) {
      console.error('Error creating meal plan:', error);
    }
  };

  // TODO: Implement calendar view for meal planning
  // TODO: Add drag-and-drop functionality to add recipes to days
  // TODO: Show shopping list generation button
  // TODO: Add ability to edit/delete meal items

  return (
    <div className="meal-planner">
      <h1>Meal Planner</h1>

      <div className="meal-plans-list">
        {mealPlans.map(plan => (
          <div key={plan.id} onClick={() => setSelectedPlan(plan)}>
            <h3>{plan.name}</h3>
            <p>{plan.start_date} to {plan.end_date}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setShowCreateForm(true)}>Create New Plan</button>

      {/* TODO: Implement meal plan detail view */}
      {/* TODO: Implement create meal plan form */}
    </div>
  );
}

export default MealPlanner;