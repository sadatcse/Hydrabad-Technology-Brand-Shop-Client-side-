import React from 'react';
import { FaFileAlt, FaUndo, FaHeadset, FaLock } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 mx-5">
        <div className="bg-white px-16 border border-gray-200 rounded shadow-md text-center flex flex-col items-center">
          <div className="text-4xl text-blue-600 mb-2 p-9">
            <FaFileAlt />
          </div>
          <div className="text-2xl font-semibold">Terms and Conditions</div>
        </div>

        <div className="bg-white px-16 border border-gray-200 rounded shadow-md text-center flex flex-col items-center">
          <div className="text-4xl text-yellow-600 mb-2 p-9">
            <FaUndo />
          </div>
          <div className="text-2xl font-semibold">Return Policy</div>
        </div>

        <div className="bg-white px-16 border border-gray-200 rounded shadow-md text-center flex flex-col items-center">
          <div className="text-4xl text-green-600 mb-2 p-9">
            <FaHeadset />
          </div>
          <div className="text-2xl font-semibold">Support Policy</div>
        </div>

        <div className="bg-white px-16 border border-gray-200 rounded shadow-md text-center flex flex-col items-center">
          <div className="text-4xl text-red-600 mb-2 p-9">
            <FaLock />
          </div>
          <div className="text-2xl font-semibold">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
