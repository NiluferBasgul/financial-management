import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://localhost:7238;http://localhost:5229/api',
});

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.data;
};

export const getBudgets = async () => {
  try {
    const response = await apiUrl.get('/budgets');
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error fetching budgets: ' + error.message);
  }
};

export const registerUser = async (userData) => {
    try {
      const response = await apiUrl.post('/register', userData);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user: ' + error.message);
    }
  };

  export default {
    apiUrl,
    handleResponse,
    getBudgets,
    registerUser,
    // add other exported functions as needed
  };