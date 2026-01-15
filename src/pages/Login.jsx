import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '@/auth/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleLogin = () => {
    try {
      login(username, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form>
        <input placeholder="Username" onchange={(e) => setUsername(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onchange={(e) => setPassword(e.target.value)}
        />
        <button onclick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login