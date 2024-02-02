import React, { useState, useEffect } from 'react';
import api from '../services/api';
import RevenueList from '../components/Revenue/RevenueList';

function RevenuePage() {
  const [revenues, setRevenues] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/revenues');
      setRevenues(response.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Revenues</h2>
      <RevenueList items={revenues} />
    </div>
  );
}

export default RevenuePage;
