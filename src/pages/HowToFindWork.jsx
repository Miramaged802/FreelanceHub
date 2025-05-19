import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaPen, FaDollarSign, FaComments, FaStar } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HowToFindWork = () => {
  const tips = [
    {
      title: "Complete Your Profile",
      description:
        "Create a compelling profile that showcases your expertise. Include a professional photo, detailed work history, and relevant skills.",
      icon: <FaUser />,
    },
    {
      title: "Build Your Portfolio",
      description:
        "Showcase your best work samples, case studies, and successful projects. Make sure to highlight measurable results and client testimonials.",
      icon: <FaBriefcase />,
    },
    {
      title: "Perfect Your Proposals",
      description:
        "Write personalized proposals that address the client's specific needs. Demonstrate your understanding of the project and outline your approach.",
      icon: <FaPen />,
    },
    {
      title: "Set Competitive Rates",
      description:
        "Research market rates for your skills and experience level. Consider value-based pricing and be prepared to justify your rates.",
      icon: <FaDollarSign />,
    },
    {
      title: "Effective Communication",
      description:
        "Respond promptly to client messages, ask clarifying questions, and maintain professional communication throughout the project.",
      icon: <FaComments />,
    },
    {
      title: "Deliver Excellence",
      description:
        "Meet deadlines, exceed expectations, and maintain high quality standards. Request feedback and build long-term relationships.",
      icon: <FaStar />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">
            How to Succeed as a Freelancer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these proven strategies to stand out, win more projects, and
            build a thriving freelance career on FreelanceHub.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4 text-primary-600">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary-600">
                {tip.title}
              </h3>
              <p className="text-primary-600">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary-600">
            Pro Tips for Success
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold mb-2 text-primary-600">
                Time Management
              </h3>
              <p className="text-primary-600">
                Use time tracking tools and set realistic deadlines. Always
                include buffer time for revisions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold mb-2 text-primary-600">
                Client Relationships
              </h3>
              <p className="text-primary-600">
                Build trust through consistent communication and delivering
                results. Happy clients lead to referrals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold mb-2 text-primary-600">
                Continuous Learning
              </h3>
              <p className="text-primary-600">
                Stay updated with industry trends and continuously improve your
                skills to remain competitive.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mt-12"
        >
          <Link
            to="/jobs"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>Start Browsing Jobs</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
            <p className="mt-4 text-gray-500">
            Ready to take your freelancing career to the next level?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToFindWork;
