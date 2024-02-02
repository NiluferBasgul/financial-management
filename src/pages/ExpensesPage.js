import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ExpenseList from '../components/Expense/ExpenseList';

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ExpenseList items={expenses} />
    </div>
  );
}

export default ExpensesPage;
