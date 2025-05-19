import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileContract,
  FaUser,
  FaClock,
  FaDollarSign,
  FaCheckCircle,
  FaSpinner,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";

const ManageContracts = () => {
  const [activeTab, setActiveTab] = useState("active");

  // Sample data - replace with actual API call
  const [contracts] = useState([
    {
      id: 1,
      title: "E-commerce Website Development",
      freelancer: {
        name: "John Doe",
        avatar: "https://ui-avatars.com/api/?name=John+Doe",
      },
      status: "active",
      startDate: "2024-02-15",
      endDate: "2024-03-15",
      budget: 2500,
      milestones: [
        {
          id: 1,
          title: "Frontend Development",
          status: "completed",
          amount: 1000,
        },
        {
          id: 2,
          title: "Backend Integration",
          status: "in-progress",
          amount: 1000,
        },
        {
          id: 3,
          title: "Testing & Deployment",
          status: "pending",
          amount: 500,
        },
      ],
      progress: 65,
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      freelancer: {
        name: "Sarah Smith",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Smith",
      },
      status: "completed",
      startDate: "2024-01-01",
      endDate: "2024-02-01",
      budget: 1800,
      milestones: [
        { id: 1, title: "Wireframes", status: "completed", amount: 600 },
        { id: 2, title: "UI Design", status: "completed", amount: 800 },
        { id: 3, title: "Design System", status: "completed", amount: 400 },
      ],
      progress: 100,
    },
  ]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const filteredContracts = contracts.filter(
    (contract) => activeTab === "all" || contract.status === activeTab
  );

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeIn}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-6 text-white mb-8"
        >
          <h1 className="text-3xl font-bold">Manage Contracts</h1>
          <p className="mt-2 text-primary-100">
            Track and manage your ongoing contracts
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-4">
          {["all", "active", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                activeTab === tab
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab} Contracts
            </button>
          ))}
        </div>

        {/* Contracts Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredContracts.map((contract) => (
            <motion.div
              key={contract.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
              {...fadeIn}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Contract Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <FaFileContract className="text-4xl text-primary-500" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {contract.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusColor(contract.status)}`}
                      >
                        {contract.status.charAt(0).toUpperCase() +
                          contract.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-primary-500" />
                      <div className="flex items-center gap-2">
                        <img
                          src={contract.freelancer.avatar}
                          alt={contract.freelancer.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span>{contract.freelancer.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-primary-500" />
                      <span>
                        {contract.startDate} - {contract.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaDollarSign className="text-primary-500" />
                      <span>${contract.budget}</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 space-y-2">
                    <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all flex items-center justify-center gap-2">
                      <FaFileAlt />
                      View Contract
                    </button>
                    <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all flex items-center justify-center gap-2">
                      <FaComments />
                      Message Freelancer
                    </button>
                  </div>
                </div>

                {/* Milestones */}
                <div className="lg:w-2/3">
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Project Progress
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary-500 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${contract.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {contract.progress}% Complete
                    </span>
                  </div>

                  <h4 className="font-medium text-gray-900 mb-4">Milestones</h4>
                  <div className="space-y-4">
                    {contract.milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          {milestone.status === "completed" ? (
                            <FaCheckCircle className="text-green-500" />
                          ) : milestone.status === "in-progress" ? (
                            <FaSpinner className="text-yellow-500 animate-spin" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                          )}
                          <span className="font-medium">{milestone.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${getStatusColor(milestone.status)}`}
                          >
                            {milestone.status.charAt(0).toUpperCase() +
                              milestone.status.slice(1)}
                          </span>
                          <span className="font-medium">
                            ${milestone.amount}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ManageContracts;
