import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import ProfileUpdate from "./components/ProfileUpdate"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Create a Home component */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileUpdate />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
