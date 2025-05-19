import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaUserFriends,
  FaFileContract,
  FaStar,
} from "react-icons/fa";

const HowToHire = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics" },
    { id: "posting", name: "Posting Jobs" },
    { id: "hiring", name: "Hiring Process" },
    { id: "management", name: "Project Management" },
    { id: "payment", name: "Payment & Security" },
  ];

  const content = [
    {
      id: 1,
      category: "posting",
      title: "Creating an Effective Job Post",
      icon: <FaFileContract className="text-2xl text-primary-500" />,
      steps: [
        "Write a clear and detailed job description",
        "Specify required skills and experience",
        "Set realistic budget and timeline",
        "Include project milestones and deliverables",
        "Add relevant attachments or examples",
      ],
      tips: "Be specific about your requirements to attract the right talent.",
    },
    {
      id: 2,
      category: "hiring",
      title: "Finding the Right Freelancer",
      icon: <FaUserFriends className="text-2xl text-primary-500" />,
      steps: [
        "Review freelancer profiles and portfolios",
        "Check ratings and client feedback",
        "Review past project history",
        "Assess communication skills",
        "Verify skill certifications",
      ],
      tips: "Look for freelancers with proven experience in similar projects.",
    },
    {
      id: 3,
      category: "management",
      title: "Managing Your Project",
      icon: <FaClock className="text-2xl text-primary-500" />,
      steps: [
        "Set clear project milestones",
        "Establish communication channels",
        "Schedule regular check-ins",
        "Track progress and deliverables",
        "Provide timely feedback",
      ],
      tips: "Regular communication is key to project success.",
    },
    {
      id: 4,
      category: "payment",
      title: "Payment and Security",
      icon: <FaMoneyBillWave className="text-2xl text-primary-500" />,
      steps: [
        "Use secure payment methods",
        "Set up milestone-based payments",
        "Review work before releasing payment",
        "Keep payment records",
        "Understand platform fees",
      ],
      tips: "Always use the platform's secure payment system.",
    },
  ];

  const filteredContent = content.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.steps.some((step) =>
        step.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          How to Hire on FreelanceHub
        </h1>
        <p className="text-xl text-primary-600 max-w-3xl mx-auto">
          Learn best practices for posting jobs, selecting talent, and managing
          projects successfully on our platform.
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredContent.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-50 rounded-lg">{item.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.steps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{step}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span>{item.tips}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Resources */}
      <motion.div
        variants={itemVariants}
        className="mt-12 bg-primary-50 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">
              Video Tutorials
            </h3>
            <p className="text-gray-600">
              Watch step-by-step guides on hiring and project management.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
            <p className="text-gray-600">
              Learn from successful projects and common pitfalls to avoid.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Support Center</h3>
            <p className="text-gray-600">
              Get help from our support team and community forums.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HowToHire;
