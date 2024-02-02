import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../components/Budget/BudgetList';
function DashboardPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/dashboard');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {Object.keys(data).length > 0 ? (
        <div>
          <h3>Budgets</h3>
          {/* Render the BudgetList component with the budget data */}
          <BudgetList budgets={data.budgets} />

          {/* Add additional sections for other dashboard data if needed */}
        </div>
      ) : (
        <p>Loading dashboard data...</p>
      )}
    </div>
  );
}

export default DashboardPage;
