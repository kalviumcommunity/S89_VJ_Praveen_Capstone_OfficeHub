import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleSignInButton = () => {
  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <button 
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center bg-white text-gray-700 border border-gray-300 rounded-lg px-6 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <FaGoogle className="mr-2" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;