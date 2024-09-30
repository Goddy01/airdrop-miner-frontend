import React from 'react';
import { motion } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if the modal isn't open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        className="bg-white rounded-lg p-6 w-11/12 max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="border border-gray-300 rounded p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="border border-gray-300 rounded p-2 w-full" required />
          </div>
          <div className="flex justify-between">
            <button type="button" className="bg-yellow-500 text-white py-2 px-4 rounded" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginModal;
