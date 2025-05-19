import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          You don't have permission to access this page.
        </p>
        <Link
          to="/"
          className="bg-primary-light hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;