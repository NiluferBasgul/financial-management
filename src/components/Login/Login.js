import React from 'react';
import './Login.css';

const Login = () => {
 return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
 );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default Login;