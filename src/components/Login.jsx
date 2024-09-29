import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', email, password);
    // Here, you can handle the login logic, such as sending a request to your backend.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center mt-2">
            <button type="submit" className="w-[60%] bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200">
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm font-semibold">OR</p>
          <div className="flex justify-center mt-2">
            <button className="bg-gray-50 text-blue-500 font-bold py-2 px-4 rounded-l hover:bg-blue-600 hover:text-gray-50 border">
              <i className="fa-brands fa-telegram mx-2"></i>
              Login with Telegram
            </button>
          </div>
          <p className='text-sm my-2'>
            Don't have an account? <a href="/signup" className='text-blue-500 font-semibold'>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
