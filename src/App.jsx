import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProfileUpdate from './components/ProfileUpdate';

const App = () => {

  const isAuthenticated = false;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
    setIsOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
    setIsOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home 
          toggleMenu={toggleMenu} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
          isLoginModalOpen={isLoginModalOpen} 
          setIsLoginModalOpen={setIsLoginModalOpen} 
          isSignupModalOpen={isSignupModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}

        />} />
        <Route path="/profile" element={<ProfileUpdate 
          toggleMenu={toggleMenu} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
          isLoginModalOpen={isLoginModalOpen} 
          setIsLoginModalOpen={setIsLoginModalOpen} 
          isSignupModalOpen={isSignupModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
        />} />
      </Routes>
      {/* Authentication Check */}
      {/* {isAuthenticated ? (
        <div>
          <p>You are logged in to the homepage!</p>
        </div>
      ) : (
        <div>
          <p>You are not logged in, redirecting...</p>
        </div>
      )} */}
    </Router>
  );
}

export default App;
