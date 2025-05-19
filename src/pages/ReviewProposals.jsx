import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaUser,
  FaClock,
  FaDollarSign,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const ReviewProposals = () => {
  const [filter, setFilter] = useState("all");

  // Sample data - replace with actual API call
  const [proposals] = useState([
    {
      id: 1,
      freelancerName: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe",
      jobTitle: "E-commerce Website Development",
      coverLetter: "I have 5 years of experience in e-commerce development...",
      bid: 2500,
      duration: "30 days",
      rating: 4.8,
      status: "pending",
      skills: ["React", "Node.js", "MongoDB"],
      completedJobs: 45,
      responseTime: "2 hours",
    },
    {
      id: 2,
      freelancerName: "Sarah Smith",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Smith",
      jobTitle: "Mobile App UI Design",
      coverLetter:
        "Experienced UI designer with a portfolio of successful apps...",
      bid: 1800,
      duration: "20 days",
      rating: 4.9,
      status: "pending",
      skills: ["UI Design", "Figma", "Adobe XD"],
      completedJobs: 38,
      responseTime: "1 hour",
    },
  ]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const handleAccept = (id) => {
    console.log("Accepted proposal:", id);
  };

  const handleReject = (id) => {
    console.log("Rejected proposal:", id);
  };

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
          <h1 className="text-3xl font-bold">Review Proposals</h1>
          <p className="mt-2 text-primary-100">
            Review and manage proposals from freelancers
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === "all"
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Proposals
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === "pending"
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("accepted")}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === "accepted"
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Accepted
          </button>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 gap-6">
          {proposals.map((proposal) => (
            <motion.div
              key={proposal.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
              {...fadeIn}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Freelancer Info */}
                <div className="md:w-1/4">
                  <div className="flex items-center gap-4">
                    <img
                      src={proposal.avatar}
                      alt={proposal.freelancerName}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {proposal.freelancerName}
                      </h3>
                      <div className="flex items-center text-yellow-500">
                        <FaStar className="mr-1" />
                        <span>{proposal.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-primary-500" />
                      <span>{proposal.completedJobs} jobs completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-primary-500" />
                      <span>{proposal.responseTime} response time</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {proposal.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Proposal Details */}
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-lg mb-2">
                    {proposal.jobTitle}
                  </h3>
                  <p className="text-gray-600 mb-4">{proposal.coverLetter}</p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <FaDollarSign className="text-primary-500" />
                      <span>Bid: ${proposal.bid}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-primary-500" />
                      <span>Duration: {proposal.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="md:w-1/4 flex md:flex-col justify-end gap-4">
                  <motion.button
                    onClick={() => handleAccept(proposal.id)}
                    className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaCheck />
                    Accept
                  </motion.button>
                  <motion.button
                    onClick={() => handleReject(proposal.id)}
                    className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaTimes />
                    Reject
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewProposals;
