import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const PricingCard = ({ title, price, features, isPopular }) => (
  <div className={`bg-gradient-to-br from-indigo-700 via-blue-800 to-purple-800 rounded-lg shadow-xl p-6 flex flex-col ${isPopular ? 'border-2 border-yellow-500' : ''}`}>
    <h3 className="text-2xl font-bold text-center text-white mb-4">{title}</h3>
    <p className="text-center text-3xl font-bold text-yellow-300 mb-6 break-all">
      {price}
      {
        price !== '₦0' &&
      
      <span className='text-base'>month</span>
      }
    </p>
    <ul className="flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-3 text-gray-300">
          <FontAwesomeIcon 
            icon={feature.included ? faCheck : faTimes} 
            className={feature.included ? "text-green-400 mr-2" : "text-red-400 mr-2"}
          />
          {feature.text}
        </li>
      ))}
    </ul>
    <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full transition duration-300">
      Choose Plan
    </button>
    {isPopular && (
      <span className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
        Popular
      </span>
    )}
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Free",
      price: "₦0",
      features: [
        { text: "2 Airdrops", included: true },
        { text: "Basic Support", included: true },
        { text: "Manual Activation", included: true },
        { text: "Limited Features", included: true },
        { text: "No Analytics", included: false },
      ],
      isPopular: false,
    },
    {
      title: "Basic",
      price: "₦3,000/",
      features: [
        { text: "3-7 Airdrops", included: true },
        { text: "Priority Support", included: true },
        { text: "Automated Activation", included: true },
        { text: "Advanced Features", included: true },
        { text: "Basic Analytics", included: true },
      ],
      isPopular: true,
    },
    {
      title: "Pro",
      price: "₦8,000/",
      features: [
        { text: "8-20 Airdrops", included: true },
        { text: "24/7 Premium Support", included: true },
        { text: "Automated Activation", included: true },
        { text: "All Premium Features", included: true },
        { text: "Advanced Analytics", included: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900 py-20 min-h-screen flex flex-col justify-center align-center" id='pricing'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Pricing & Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
