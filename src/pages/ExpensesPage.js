import React, { useState, useEffect } from 'react';
import api from '../services/api';

function ExpensesPage() {
 const [data, setData] = useState({});

 useEffect(() => {
    async function fetchData() {
      const response = await api.get('/expenses');
      setData(response.data);
    }

    fetchData();
 }, []);

 return (
    <div>
      <h2>Expenses</h2>
      {/* Render the data fetched from the backend */}
    </div>
 );
}

export default ExpensesPage;