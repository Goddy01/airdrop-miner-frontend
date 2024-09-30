import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faMedium, faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faRocket, faChartLine, faCog, faUsers, faCoins, faCube, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import PricingSection from './Pricing';


export default function Homepage() {
  const [icons, setIcons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <nav className="bg-gray-900 bg-opacity-75 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-yellow-400">Autodrop</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 font-semibold">
            <a href="#features" className="hover:text-yellow-400 transition-colors px-4 py-2">Features</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors px-4 py-2">About</a>
            <a href="/login" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-full transition-colors">Login</a>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isOpen ? '' : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, x: 300 }}  // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }}     // Slide in
            exit={{ opacity: 0, x: 300 }}       // Slide out to the right
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-900 bg-opacity-75 shadow-lg md:hidden z-50" // Make sure it's fixed and on top
            >
            {/* Close button should be on the menu */}
            <button 
                className="absolute top-4 right-4 text-yellow-400" // Positioning the close button
                onClick={toggleMenu}
                aria-label="Close menu"
            >
                <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            <div className="flex flex-col items-center space-y-4 py-16"> {/* Added padding to center items */}
                <a href="#features" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Features</a>
                <a href="#about" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>About</a>
                <a href="/login" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-full transition-colors" onClick={toggleMenu}>Login</a>
            </div>
            </motion.div>
        )}
        </AnimatePresence>

      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center container mx-auto text-center overflow-hidden px-3 pt-[18vh]">
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
          Reactivate Your Crypto Airdrops
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Automate and manage your Telegram airdrop mini-apps with ease
        </motion.p>
        <motion.a 
          href="/login" 
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-full text-lg transition-colors inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faRocket} className="mr-2" />
          Get Started
        </motion.a>
      </header>

      {/* Combined Features and About Section */}
      <section id="features-about" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-5">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">Why Choose Us</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            Our platform simplifies the process of managing and reactivating Telegram airdrop mini-apps, helping you stay ahead in the dynamic world of airdrops.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
            <FeatureCard 
                icon={faChartLine}
                title="Unlock Your Earning Potential" 
                description="Discover innovative airdrop strategies that boost your earnings and keep you ahead of the game!"
            />
            <FeatureCard 
                icon={faCog}
                title="Effortless Automation" 
                description="Sit back and relax! Our automated solutions ensure your airdrops are managed seamlessly while you focus on what matters."
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
            <p>&copy; {new Date().getFullYear()} Autodrop. All rights reserved.</p>
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
