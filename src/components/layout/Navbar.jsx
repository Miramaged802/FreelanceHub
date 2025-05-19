import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaBlog,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userType } = useSelector((state) => state.auth);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isClientMenuOpen, setIsClientMenuOpen] = useState(false);
  const [isFreelancerMenuOpen, setIsFreelancerMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".hamburger")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authUser");
    dispatch(logout());
    navigate("/login");
    setIsSidebarOpen(false);
  };

  const navLinks = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/about", icon: <FaInfoCircle />, text: "About Us" },
    { to: "/services", icon: <FaCogs />, text: "Services" },
    { to: "/blog", icon: <FaBlog />, text: "Blog" },
    { to: "/contact", icon: <FaEnvelope />, text: "Contact" },
  ];

  const Sidebar = () => (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="sidebar fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl"
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="text-2xl font-bold text-primary-600"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  FreelanceHub
                </Link>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <FaTimes className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {link.icon}
                    <span>{link.text}</span>
                  </Link>
                ))}

                {isAuthenticated && (
                  <>
                    {userType === "client" && (
                      <>
                        <Link
                          to="/how-to-hire"
                          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <FaInfoCircle />
                          <span>How to Hire</span>
                        </Link>
                        <Link
                          to="/post-job"
                          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <FaCogs />
                          <span>Post a Job</span>
                        </Link>
                      </>
                    )}

                    {userType === "freelancer" && (
                      <>
                        <Link
                          to="/how-to-find-work"
                          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <FaInfoCircle />
                          <span>How to Find Work</span>
                        </Link>
                        <Link
                          to="/jobs"
                          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <FaCogs />
                          <span>Find Jobs</span>
                        </Link>
                      </>
                    )}

                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <FaUser />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <FaUser />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    >
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </>
                )}

                {!isAuthenticated && (
                  <Link
                    to="/login"
                    className="flex items-center justify-center space-x-3 px-4 py-3 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <FaUser />
                    <span>Sign In</span>
                  </Link>
                )}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              FreelanceHub
            </Link>

            <button
              className="hamburger md:hidden p-2 hover:bg-gray-100 rounded-lg ml-4 flex items-center justify-center"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars className="text-gray-600 text-xl" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
              >
                {link.text}
              </Link>
            ))}

            {isAuthenticated && (
              <>
                {userType === "client" && (
                  <div className="relative">
                    <button
                      onClick={() => setIsClientMenuOpen(!isClientMenuOpen)}
                      onBlur={() =>
                        setTimeout(() => setIsClientMenuOpen(false), 200)
                      }
                      className="text-primary-600 hover:text-primary-700 transition-colors focus:outline-none inline-flex items-center whitespace-nowrap"
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
                      className="text-primary-600 hover:text-primary-700 transition-colors focus:outline-none inline-flex items-center whitespace-nowrap"
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
                    className="text-primary-600 hover:text-primary-700 transition-colors focus:outline-none inline-flex items-center whitespace-nowrap"
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

      {/* Mobile Sidebar */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
