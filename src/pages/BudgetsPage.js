import React, { useState, useEffect } from 'react';
import BudgetList from '../components/Budget/BudgetList';
import api from '../services/api';

function BudgetsPage() {
 const [budgets, setBudgets] = useState([]);

 useEffect(() => {
    api.get('/budgets')
      .then(response => {
        setBudgets(response.data);
      })
      .catch(error => {
        console.log('Error fetching budgets:', error);
      });
 }, []);

 return (
    <div>
      <h1>Budgets</h1>
      <BudgetList budgets={budgets} />
    </div>
 );
}

export default BudgetsPage;