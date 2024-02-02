import React, { useState, useEffect } from 'react';
import api from '../services/api';
import IncomeList from '../components/Income/IncomeList';

function IncomesPage() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/incomes');
        setIncomes(response.data);
      } catch (error) {
        console.error('Error fetching incomes:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Incomes</h2>
      <IncomeList items={incomes} />
    </div>
  );
}

export default IncomesPage;
