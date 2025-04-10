import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const NotFound = () => {
  return (
    <div className="min-h-screen font-aeonik bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        {/* SVG Illustration */}
        <div className="mb-8 flex justify-center">
          <svg viewBox="0 0 600 400" width="350" height="233" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300, 200)">
              {/* 404 Text */}
              <text x="-140" y="0" fontSize="120" fontWeight="bold" fill="#172554">4</text>
              <text x="0" y="0" fontSize="120" fontWeight="bold" fill="#172554">0</text>
              <text x="140" y="0" fontSize="120" fontWeight="bold" fill="#172554">4</text>
              
              {/* Confused character */}
              <g transform="translate(0, -90)">
                {/* Head */}
                <circle cx="0" cy="0" r="50" fill="#3b82f6" />
                
                {/* Eyes */}
                <circle cx="-15" cy="-10" r="8" fill="white" />
                <circle cx="15" cy="-10" r="8" fill="white" />
                <circle cx="-15" cy="-10" r="3" fill="#172554" />
                <circle cx="15" cy="-10" r="3" fill="#172554" />
                
                {/* Confused mouth */}
                <path d="M-15,20 Q0,10 15,20" stroke="#172554" strokeWidth="4" fill="none" />
                
                {/* Question marks */}
                <text x="-70" y="-20" fontSize="40" fontWeight="bold" fill="#60a5fa">?</text>
                <text x="60" y="-30" fontSize="30" fontWeight="bold" fill="#60a5fa">?</text>
                <text x="40" y="10" fontSize="20" fontWeight="bold" fill="#60a5fa">?</text>
              </g>
            </g>
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Oops! The page you're looking for seems to have wandered off.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg w-full md:w-auto"
          >
            Return Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-300 text-lg w-full md:w-auto"
          >
            Go Back
          </button>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline">Home</Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-800 hover:underline">About</Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">Contact</Link>
          </div>
        </div>
        
        <div className="mt-16 text-sm text-gray-400">
          <p>Error code: 404 | Page Not Found</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;