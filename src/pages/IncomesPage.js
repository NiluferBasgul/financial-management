import React, { useState, useEffect } from 'react';
import api from '../services/api';

function IncomesPage() {
 const [data, setData] = useState({});

 useEffect(() => {
    async function fetchData() {
      const response = await api.get('/incomes');
      setData(response.data);
    }

    fetchData();
 }, []);

 return (
    <div>
      <h2>Incomes</h2>
      {/* Render the data fetched from the backend */}
    </div>
 );
}

export default IncomesPage;