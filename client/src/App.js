import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import CreateRecipe from './components/CreateRecipe';
import MealPlanner from './components/MealPlanner';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;