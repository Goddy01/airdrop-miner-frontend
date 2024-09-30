import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup attempted with:', email, password);
    // Here, you can handle the signup logic, such as sending a request to your backend.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-blue-800 to-purple-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-[90vw] max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-50">Sign Up</h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="block w-full border border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-500 transition duration-200"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              id="phoneNumber"
              className="block w-full border border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-500 transition duration-200"
              placeholder="Mobile Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="block w-full border border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-500 transition duration-200"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center mt-2">
            <button type="submit" className="w-[60%] bg-blue-700 text-gray-50 font-bold py-2 rounded hover:bg-blue-800 transition duration-200 focus:outline-none focus:ring focus:ring-blue-400">
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-gray-50">OR</p>
          <div className="flex justify-center mt-2">
          <button type="submit" className="bg-blue-700 py-2 px-4 text-gray-50 font-bold rounded hover:bg-blue-800 transition duration-200 focus:outline-none focus:ring focus:ring-blue-400">
              <i className="fa-brands fa-telegram mx-2"></i>
              Sign Up with Telegram
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm my-2 text-gray-50">
            Already have an account? <a href="/login" className="text-blue-500 font-semibold hover:underline">Login</a>
          </p>
          <p className="text-sm text-center text-opacity-70 text-gray-50">
            By signing up, you agree to our 
            <span className='text-blue-500 font-semibold'> TOS </span>
            & 
            <span className='text-blue-500 font-semibold'> Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
