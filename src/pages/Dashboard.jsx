import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaBriefcase,
  FaUsersCog,
  FaCheckCircle,
  FaPlus,
  FaFileContract,
  FaUserCheck,
  FaStar,
  FaSearch,
} from "react-icons/fa";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log("Users:", users);

    // Get the current user's email from localStorage
    const currentUserEmail = localStorage.getItem("currentUser");
    console.log("Current User Email:", currentUserEmail);

    if (currentUserEmail) {
      // Find the user in the users array
      const user = users.find((u) => u.email === currentUserEmail);
      if (user) {
        setUserData({
          ...user,
          fullName: `${user.firstName} ${user.lastName}`,
          userType: user.role,
        });
      }
    }

    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Stats based on user type
  const clientStats = {
    totalSpent: 4000,
    openJobs: 5,
    proposalsReceived: 20,
    completedContracts: 10,
  };

  const freelancerStats = {
    totalEarned: 5500,
    activeProjects: 3,
    proposalsSent: 15,
    completedProjects: 8,
    rating: 4.8,
  };

  const [recentJobs] = useState([
    {
      id: 1,
      title: "E-commerce Website Development",
      proposals: 12,
      deadline: "2024-03-15",
      status: "Hiring",
      budget: 3000,
      applicants: 8,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      proposals: 6,
      deadline: "2024-03-20",
      status: "In Progress",
      budget: 1500,
      applicants: 15,
      category: "UI/UX Design",
    },
    {
      id: 3,
      title: "WordPress Blog Customization",
      proposals: 4,
      deadline: "2024-03-25",
      status: "Draft",
      budget: 800,
      applicants: 0,
      category: "WordPress",
    },
  ]);

  const [recentProjects] = useState([
    {
      id: 1,
      title: "Social Media Dashboard",
      client: "Tech Solutions Inc.",
      deadline: "2024-03-20",
      status: "In Progress",
      payment: 2500,
      nextMilestone: "Backend Integration",
    },
    {
      id: 2,
      title: "Restaurant Website",
      client: "Foodie Express",
      deadline: "2024-03-25",
      status: "Review",
      payment: 1800,
      nextMilestone: "Mobile Responsiveness",
    },
  ]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const isFreelancer = userData?.userType === "freelancer";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-6 text-white mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back, {userData?.fullName || "User"}!
          </h1>
          <p className="text-primary-100 mt-2">
            {isFreelancer
              ? `Manage your projects and track your earnings as a ${userData?.specialization || "Freelancer"}`
              : "Manage your jobs and track your progress"}
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {isFreelancer ? (
          // Freelancer Stats
          <>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaMoneyBillWave className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Earned
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    ${freelancerStats.totalEarned}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaBriefcase className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Active Projects
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {freelancerStats.activeProjects}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaStar className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Rating</h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {freelancerStats.rating}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaCheckCircle className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Completed
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {freelancerStats.completedProjects}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          // Client Stats
          <>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaMoneyBillWave className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Spent
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    ${clientStats.totalSpent}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaBriefcase className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Active Jobs
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {clientStats.openJobs}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaUsersCog className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Proposals
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {clientStats.proposalsReceived}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
            >
              <div className="flex items-center">
                <FaCheckCircle className="text-3xl text-primary-500 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Completed
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {clientStats.completedContracts}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Main Content */}
      <motion.div
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isFreelancer ? "Your Projects" : "Your Jobs"}
          </h2>
          {!isFreelancer && (
            <Link
              to="/post-job"
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <FaPlus className="mr-2" /> Post New Job
            </Link>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {isFreelancer ? "Project" : "Job Title"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {isFreelancer ? "Client" : "Category"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {isFreelancer ? "Deadline" : "Proposals"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {isFreelancer ? "Payment" : "Budget"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(isFreelancer ? recentProjects : recentJobs).map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {isFreelancer ? item.client : item.category}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {isFreelancer
                        ? item.deadline
                        : `${item.proposals} received`}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === "Hiring" ||
                        item.status === "In Progress"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    ${isFreelancer ? item.payment : item.budget}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <button className="text-primary-600 hover:text-primary-800 mr-3">
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      {isFreelancer ? "Submit Work" : "Edit"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Actions and Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          {...fadeIn}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            Quick Actions
          </h3>
          <div className="space-y-3">
            {isFreelancer ? (
              <>
                <Link
                  to="/jobs"
                  className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  <FaSearch className="mr-2" /> Find Jobs
                </Link>
                <Link
                  to="/my-proposals"
                  className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  <FaFileContract className="mr-2" /> My Proposals
                </Link>
                <Link
                  to="/earnings"
                  className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  <FaMoneyBillWave className="mr-2" /> View Earnings
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/post-job"
                  className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  <FaPlus className="mr-2" /> Post a New Job
                </Link>
                <Link
                  to="/review-proposals"
                  className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  <FaUserCheck className="mr-2" /> Review Proposals
                </Link>
                <Link
                  to="/manage-contracts"
                  className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  <FaFileContract className="mr-2" /> Manage Contracts
                </Link>
              </>
            )}
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          {...fadeIn}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            {isFreelancer ? "Current Milestones" : "Hiring Progress"}
          </h3>
          <ul className="space-y-4">
            {isFreelancer
              ? recentProjects
                  .filter((project) => project.status === "In Progress")
                  .map((project) => (
                    <li
                      key={project.id}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-sm text-gray-700 font-medium">
                        {project.nextMilestone}
                      </span>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        In Progress
                      </span>
                    </li>
                  ))
              : recentJobs
                  .filter((job) => job.status === "Hiring")
                  .map((job) => (
                    <li
                      key={job.id}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-sm text-gray-700 font-medium">
                        {job.title}
                      </span>
                    </li>
                  ))}
          </ul>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          {...fadeIn}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            Recent Activity
          </h3>
          <ul className="space-y-4">
            {isFreelancer ? (
              <>
                <li className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Milestone completed for Social Media Dashboard
                </li>
                <li className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  New message from Foodie Express
                </li>
                <li className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Payment received for Website Design
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  New proposal received for E-commerce Website
                </li>
                <li className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Mobile App UI Design milestone completed
                </li>
                <li className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Contract started with David Wilson
                </li>
              </>
            )}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
