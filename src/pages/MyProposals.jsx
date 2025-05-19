import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaDollarSign,
  FaClock,
  FaStar,
  FaFilter,
} from "react-icons/fa";

function MyProposals() {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Sample data - In a real app, this would come from an API
  const proposals = useMemo(
    () => [
      {
        id: 1,
        jobTitle: "E-commerce Website Development",
        client: "Tech Solutions Inc.",
        budget: 3000,
        submittedDate: "2024-03-15",
        status: "pending",
        coverLetter:
          "I have extensive experience in building e-commerce platforms...",
        bidAmount: 2800,
        estimatedDuration: "2 months",
        skills: ["React", "Node.js", "MongoDB"],
      },
      {
        id: 2,
        jobTitle: "Mobile App UI Design",
        client: "Foodie Express",
        budget: 1500,
        submittedDate: "2024-03-10",
        status: "accepted",
        coverLetter: "As a UI/UX designer with 5 years of experience...",
        bidAmount: 1400,
        estimatedDuration: "3 weeks",
        skills: ["Figma", "UI/UX", "Mobile Design"],
      },
      {
        id: 3,
        jobTitle: "WordPress Blog Customization",
        client: "Digital Marketing Co.",
        budget: 800,
        submittedDate: "2024-03-05",
        status: "rejected",
        coverLetter:
          "I specialize in WordPress development and customization...",
        bidAmount: 750,
        estimatedDuration: "1 week",
        skills: ["WordPress", "PHP", "CSS"],
      },
    ],
    []
  ); // Empty dependency array since this is static data

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Filter and sort proposals
  const filteredAndSortedProposals = useMemo(() => {
    return proposals
      .filter((proposal) => {
        const matchesSearch =
          proposal.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          proposal.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
          proposal.skills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          );

        const matchesFilter = filter === "all" || proposal.status === filter;

        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "recent":
            return new Date(b.submittedDate) - new Date(a.submittedDate);
          case "oldest":
            return new Date(a.submittedDate) - new Date(b.submittedDate);
          case "budget":
            return b.budget - a.budget;
          default:
            return 0;
        }
      });
  }, [proposals, searchQuery, filter, sortBy]);

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

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">My Proposals</h1>
        <p className="text-gray-600 mt-2">
          Track and manage your job proposals
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Filters and Search */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search proposals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaFilter />
                <span>Filters</span>
              </button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-gray-200">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sort By
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="recent">Most Recent</option>
                        <option value="oldest">Oldest First</option>
                        <option value="budget">Highest Budget</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="text-sm text-gray-600">
          Showing {filteredAndSortedProposals.length} of {proposals.length}{" "}
          proposals
        </div>

        {/* Proposals List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredAndSortedProposals.map((proposal) => (
              <motion.div
                key={proposal.id}
                variants={itemVariants}
                layout
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer">
                          {proposal.jobTitle}
                        </h3>
                        <p className="text-gray-600 mt-1">{proposal.client}</p>
                      </div>
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(
                          proposal.status
                        )}`}
                      >
                        {proposal.status.charAt(0).toUpperCase() +
                          proposal.status.slice(1)}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        <FaDollarSign className="mr-2 text-primary-500" />
                        <span>Bid: ${proposal.bidAmount}</span>
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        <FaClock className="mr-2 text-primary-500" />
                        <span>Duration: {proposal.estimatedDuration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        <FaStar className="mr-2 text-primary-500" />
                        <span>Budget: ${proposal.budget}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">
                        Required Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {proposal.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm hover:bg-primary-100 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">
                        Cover Letter:
                      </h4>
                      <p className="mt-1 text-gray-600 text-sm line-clamp-2">
                        {proposal.coverLetter}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2">
                    <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      View Details
                    </button>
                    {proposal.status === "pending" && (
                      <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Withdraw
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default MyProposals;
