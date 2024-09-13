import React, { useState } from 'react';
import { useSignInMutation } from '../api/productApi'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, { isLoading, error }] = useSignInMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await signIn({ email, password }).unwrap();
  
      alert('Login successful!');
    } catch (err) {
     
      alert(`Login failed: ${err.message}`);
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="login-error">Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default Login;
