import React, { useEffect, useState } from 'react';
import BudgetItem from './BugetItem';
import { getBudgets } from '../../services/api';

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const data = await getBudgets();
        setBudgets(data);
      } catch (error) {
        console.error("Error fetching budgets:", error.message);
      }
    };

    fetchBudgets();
  }, []);

  return (
    <div>
      {budgets.map((budget) => (
        <BudgetItem key={budget.id} budget={budget} />
      ))}
    </div>
  );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default BudgetList;
