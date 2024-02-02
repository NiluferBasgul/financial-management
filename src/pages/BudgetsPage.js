import React, { useState, useEffect } from 'react';
import BudgetList from '../components/Budget/BudgetList';
import api from '../services/api';

function BudgetsPage() {
  const [budgets, setBudgets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/budgets')
      .then(response => {
        setBudgets(response.data);
      })
      .catch(error => {
        console.error('Error fetching budgets:', error);
        setError('An error occurred while fetching budgets. Please try again later.');
      });
  }, []);

  return (
    <div>
      <h1>Budgets</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <BudgetList budgets={budgets} />
      )}
    </div>
  );
}

export default BudgetsPage;
