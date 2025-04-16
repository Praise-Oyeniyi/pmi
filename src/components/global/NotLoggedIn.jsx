import React from 'react';
import { Link } from 'react-router-dom';

const NotLoggedIn = () => {
  return (
    <div className="min-h-screen font-aeonik bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        {/* SVG Illustration */}
        <div className="mb-8 flex justify-center">
          <svg viewBox="0 0 600 400" width="350" height="233" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300, 200)">
              {/* Lock Icon */}
              <circle cx="0" cy="-40" r="70" fill="#e0e7ff" />
              <g transform="translate(0, -40)">
                <rect x="-30" y="-30" width="60" height="60" rx="10" fill="#3b82f6" />
                <rect x="-15" y="-15" width="30" height="30" rx="15" fill="#e0e7ff" />
                <circle cx="0" cy="0" r="8" fill="#3b82f6" />
                <rect x="-3" y="0" width="6" height="18" rx="2" fill="#3b82f6" />
              </g>
              
              {/* User Icon */}
              <g transform="translate(-100, -100)">
                <circle cx="0" cy="0" r="25" fill="#60a5fa" />
                <circle cx="0" cy="-7" r="10" fill="#172554" />
                <path d="M-15,10 Q0,20 15,10" stroke="#172554" strokeWidth="4" fill="none" />
                <path d="M-20,0 L-30,-10" stroke="#60a5fa" strokeWidth="3" />
                <path d="M20,0 L30,-10" stroke="#60a5fa" strokeWidth="3" />
              </g>
              
              {/* Arrow pointing to login */}
              <g transform="translate(50, 50)">
                <path d="M-80,-20 Q-30,30 50,0" stroke="#172554" strokeWidth="4" fill="none" />
                <polygon points="50,0 40,-10 35,5" fill="#172554" />
                <text x="-70" y="-30" fontSize="20" fontWeight="bold" fill="#172554">Login</text>
              </g>
            </g>
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Authentication Required</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          You need to be logged in to view your profile.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            to="/Login" 
            className="px-6 py-3 text-white font-medium rounded-lg bg-purple transition-colors duration-300 text-lg w-full md:w-auto"
          >
            Login
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500">
            Or, you can navigate to these pages instead:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/" className="text-purple  hover:underline">Home</Link>
            <Link to="/about" className="text-purple hover:underline">About</Link>
            <Link to="/contact" className="text-purple hover:underline">Contact</Link>
          </div>
        </div>
        
        <div className="mt-16 text-sm text-gray-400">
          <p>Login required to access this content</p>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;