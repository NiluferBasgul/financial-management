// Import necessary dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Update the import statement
import api from '../services/api';

// RegisterPage component
function RegisterPage() {
  // State variables to store user input and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Access the navigate function
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send registration request to the server
      const response = await api.post('/register', { name, email, password });

      // Check if registration was successful
      if (response.data.user) {
        // Redirect to the login page after successful registration
        navigate('/login');  // Use the navigate function to navigate
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  // Render the registration form
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

// Export the RegisterPage component
export default RegisterPage;
