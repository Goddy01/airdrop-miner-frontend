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
    <div className="flex min-h-screen bg-gradient-to-br from-gray-800 via-blue-800 to-purple-800">
      {/* Left Side: Login Form */}
      <div className="bg-gray-900 p-8 shadow-lg w-full md:w-1/2 flex flex-col justify-center items-center md:pt-[10rem]">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-50">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
          <div className="mb-4 w-full flex justify-center">
            <input
              type="email"
              id="email"
              className="block w-[80%] border border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-500 transition duration-200"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 w-full flex justify-center">
            <input
              type="password"
              id="password"
              className="block w-[80%] border border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-500 transition duration-200"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center mt-2">
            <button type="submit" className="bg-blue-700 py-2 px-8 text-gray-50 font-bold rounded hover:bg-blue-800 transition duration-200 focus:outline-none focus:ring focus:ring-blue-400">
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-gray-50">OR</p>
          <div className="flex justify-center mt-2">
            <button type="submit" className="bg-blue-700 py-2 px-4 text-gray-50 font-bold rounded hover:bg-blue-800 transition duration-200 focus:outline-none focus:ring focus:ring-blue-400">
              <i className="fa-brands fa-telegram mx-2"></i>
              Login with Telegram
            </button>
          </div>
          <p className='text-sm my-2 text-gray-50'>
            Don't have an account? <a href="/signup" className='text-blue-500 font-semibold hover:underline'>Sign Up</a>
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 justify-center items-center relative overflow-hidden px-8">
        <div className="relative text-center text-gray-50 flex-cols justify-center align-center w-[50vw]">
            <h2 className="text-4xl font-bold mb-4">Automate Your Airdrop Farming</h2>
            <p className="mb-6">Maximize your earnings effortlessly with our platform designed to automate farming and mining of airdrops directly within Telegram mini-apps.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
