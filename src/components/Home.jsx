import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faRocket, faChartLine, faCog, faUsers, faCoins, faCube, faXmark, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import PricingSection from './Pricing';

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', email, password);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Login</h2>
            <form onSubmit={loginUser}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder='Email Address'
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder='Password'
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-300">
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">Or login with</p>
              <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                Telegram
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <button onClick={onSwitchToSignup} className="text-yellow-400 hover:underline">
                  Sign up
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUpUser = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign attempted with:', email, password);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Sign Up</h2>
            <form onSubmit={signUpUser}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder='Email Address'
                  id="signup-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder='Password'
                  id="signup-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder='Confirm Password'
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-300">
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">Or sign up with</p>
              <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                Telegram
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <button onClick={onSwitchToLogin} className="text-yellow-400 hover:underline">
                  Log in
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Homepage(props) {
  const [icons, setIcons] = useState([]);
  
  const {toggleMenu, isOpen, setIsOpen, isLoginModalOpen, setIsLoginModalOpen, isSignupModalOpen, setIsSignupModalOpen, openLoginModal, openSignupModal} = props
  useEffect(() => {
    const cryptoIcons = [
      { icon: faBitcoin, color: '#F7931A', name: 'Bitcoin' },
      { icon: faEthereum, color: '#627EEA', name: 'Ethereum' },
      { icon: faCoins, color: '#26A17B', name: 'Tether' },
      { icon: faCube, color: '#2775CA', name: 'Blockchain' },
    ];

    const newIcons = Array.from({ length: 8 }, (_, index) => ({
      ...cryptoIcons[index % cryptoIcons.length],
      angle: index * (360 / 8),
    }));

    setIcons(newIcons);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-100 p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-base font-bold text-yellow-400">TheDropfather</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 font-semibold">
            <Link smooth to="#features-about" className="hover:text-yellow-400 transition-colors px-4 py-2">Why Choose Us?</Link>
            <Link smooth to="#pricing" className="hover:text-yellow-400 transition-colors px-4 py-2">Pricing</Link>
            <button onClick={openLoginModal} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-full transition-colors">Login</button>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-gray-900 bg-opacity-100 shadow-lg md:hidden z-50"
            >
              <button 
                className="absolute top-4 right-4 text-yellow-400"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>

              <div className="flex flex-col items-center space-y-4 py-16">
                <Link smooth to="#features-about" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Why Choose Us?</Link>
                <Link smooth to="#pricing" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Pricing</Link>
                <button onClick={openLoginModal} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-full transition-colors">Login</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSwitchToSignup={() => {
          setIsLoginModalOpen(false);
          setIsSignupModalOpen(true);
        }}
      />

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
        onSwitchToLogin={() => {
          setIsSignupModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />

      {/* Hero Section */}
      <header id="hero" className="relative min-h-screen flex flex-col items-center container mx-auto text-center overflow-hidden px-3 pt-[18vh] py-[20rem]">
        {/* Globe with moving crypto icons */}
        <div className="relative w-64 h-64 mb-8 py-3">
          <div className="absolute inset-0"></div>
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ rotate: icon.angle }}
              animate={{
                rotate: [icon.angle, icon.angle + 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'center',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '-10px',
                  color: icon.color,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <FontAwesomeIcon icon={icon.icon} size="lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Activate All Airdrop Mining in One Click!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Automate your airdrop activation effortlessly and boost your crypto rewards instantly!
        </motion.p>

        <motion.button 
          onClick={openSignupModal}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-full text-lg transition-colors inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faRocket} className="mr-2" />
          Get Started
        </motion.button>
      </header>

      {/* Combined Features and About Section */}
      <section id="features-about" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-5 py-[7rem]">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">Why Choose Us</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            Our platform simplifies the process of managing and activating Telegram airdrop mini-apps, helping you stay ahead in the dynamic world of airdrops.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          <FeatureCard 
            icon={faCog}
            title="Effortless Automation" 
            description="Sit back and relax! Our automated solutions ensure your airdrops are managed seamlessly while you focus on what matters."
          />
          <FeatureCard 
            icon={faChartLine}
            title="Unlock Your Earning Potential" 
            description="Discover innovative airdrop strategies that boost your earnings and keep you ahead of the game!"
          />
          <FeatureCard 
            icon={faUsers}
            title="Streamlined Airdrop Management" 
            description="Simplify your airdrop processes with our platform, designed to automate and enhance your experience with Telegram mini-apps."
          />
        </div>
      </section>

      <PricingSection />

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-75 items-center p-5">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} TheDropfather. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="bg-blue-800 p-6 rounded-lg text-center hover:bg-blue-700 transition duration-200 min-h-[25vh] flex justify-center align-center flex-col"
      whileHover={{ scale: 1.05 }}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl text-yellow-400 mb-4" />
      <h3 className="text-xl md:text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </motion.div>
  );
}