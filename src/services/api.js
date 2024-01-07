import axios from 'axios';

const api = axios.create({
 baseURL: 'https://localhost:7238;http://localhost:5229/api',
});

export default api;