import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 text-center mt-30">
      <h1 className="text-8xl font-extrabold text-red-500">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</p>
      <p className="text-md text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;