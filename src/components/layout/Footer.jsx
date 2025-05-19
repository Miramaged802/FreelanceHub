import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">FreelanceHub</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Connect with top freelancers and find the perfect talent for your projects.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-hire" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  How to Hire
                </Link>
              </li>
              <li>
                <Link to="/post-job" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">For Freelancers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-find-work" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  How to Find Work
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
                  Find Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 FreelanceHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;