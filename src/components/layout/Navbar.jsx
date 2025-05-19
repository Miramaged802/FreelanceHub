import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userType } = useSelector((state) => state.auth);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isClientMenuOpen, setIsClientMenuOpen] = useState(false);
  const [isFreelancerMenuOpen, setIsFreelancerMenuOpen] = useState(false);

  const handleLogout = () => {
    // Clear all auth-related data from localStorage
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authUser");

    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              FreelanceHub
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Contact
            </Link>

            {isAuthenticated && (
              <>
                {userType === "client" && (
                  <div className="relative">
                    <button
                      onClick={() => setIsClientMenuOpen(!isClientMenuOpen)}
                      onBlur={() =>
                        setTimeout(() => setIsClientMenuOpen(false), 200)
                      }
                      className="text-primary-600 hover:text-primary-700 transition-colors focus:outline-none inline-flex items-center"
                    >
                      For Clients
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isClientMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                        <Link
                          to="/how-to-hire"
                          className="block px-4 py-2 text-primary-600 hover:bg-primary-50"
                        >
                          How to Hire
                        </Link>
                        <Link
                          to="/post-job"
                          className="block px-4 py-2 text-primary-600 hover:bg-primary-50"
                        >
                          Post a Job
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {userType === "freelancer" && (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsFreelancerMenuOpen(!isFreelancerMenuOpen)
                      }
                      onBlur={() =>
                        setTimeout(() => setIsFreelancerMenuOpen(false), 200)
                      }
                      className="text-primary-600 hover:text-primary-700 transition-colors focus:outline-none inline-flex items-center"
                    >
                      For Freelancers
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isFreelancerMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                        <Link
                          to="/how-to-find-work"
                          className="block px-4 py-2 text-primary-600 hover:bg-primary-50"
                        >
                          How to Find Work
                        </Link>
                        <Link
                          to="/jobs"
                          className="block px-4 py-2 text-primary-600 hover:bg-primary-50"
                        >
                          Find Jobs
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    onBlur={() =>
                      setTimeout(() => setIsUserMenuOpen(false), 200)
                    }
                    className="text-primary-600 hover:text-primary-700 transition-colors focus:outline-none inline-flex items-center"
                  >
                    My Account
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-primary-600 hover:bg-primary-50"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-primary-600 hover:bg-primary-50"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-primary-600 hover:bg-primary-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

            {!isAuthenticated && (
              <Link
                to="/login"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
