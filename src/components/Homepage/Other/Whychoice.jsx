
import React from 'react';

const Whychoice = () => {
  const bulletPoints = [
    "We proudly stock a curated selection of tech giants",
    "all our products are 100% authentic and sourced directly",
    "We offer the best prices on the market",
    "Enjoy peace of mind with our hassle-free 15-day return policy.",
    "Our knowledgeable and friendly customer support team is here to assist you",
    "Your online security is our priority.",
    "Explore our extensive range of tech products",
    "Our team is well-versed in the latest tech trends",
    "Stay ahead of the curve with the latest tech innovations",
    "We are committed to your satisfaction. Your happiness is our success."
  ];



  return (
    <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
        <div>
          <img
            className='max-w-md rounded-lg shadow-lg'
            src='https://i.ibb.co/sP8KJwW/whychoice.png'
            alt='Wedding Planner'
          />
        </div>
        <div>
          <h1 className='text-3xl font-bold underline mb-4'>Why Choose Us</h1>
          <ul className='list-disc pl-5 text-gray-600'>
            {bulletPoints.map((point, index) => (
              <li key={index} className='mb-2'>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Whychoice;
