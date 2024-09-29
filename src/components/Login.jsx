// src/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Email Address"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Phone Number
            <span className='text-xs text-blue-500 ml-1'>
            (for call initiation when mining sessions end)
          </span>
          </label>
          <input
            type="email"
            id="email"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Phone Number"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="telegram">
            Telegram Username
          </label>
          <input
            type="text"
            id="telegram"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Telegram Username"
          />
        </div>
        
        <div className="flex justify-center mt-2">
            <button className="w-[60%] bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200">
            Login
            </button>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm">
            OR
          </p>
          <div className="flex justify-center mt-2">
            <button className="bg-gray-50 text-blue-500 font-bold py-2 px-4 rounded-l hover:bg-blue-600 hover:text-gray-50 border">
            <i className="fa-brands fa-telegram mx-2"></i>
              Login with Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
