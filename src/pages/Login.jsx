import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '@/auth/authService';
import { Button } from '@/component/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login(username, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <div className="max-w-sm w-full">
        <h3 className="text-center uppercase font-black text-4xl mb-5">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <input
              id="username"
              placeholder=""
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded-sm p-3 w-full focus:outline-0"
            />
            <label
              className="absolute top-1/2 -translate-y-1/2 left-2.5 text-sm"
              htmlFor="username"
            >
              Username
            </label>
          </div>
          <div className="mb-4 relative">
            <input
              id="password"
              placeholder=""
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-sm p-3 w-full focus:outline-0"
            />
            <label
              className="absolute top-1/2 -translate-y-1/2 left-2.5 text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <Button type="submit" text={'Login'} />
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
