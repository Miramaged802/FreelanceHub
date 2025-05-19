import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDollarSign,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaList,
  FaGlobe,
} from "react-icons/fa";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    estimatedHours: "",
    category: "",
    skills: [],
    experienceLevel: "intermediate",
    projectType: "fixed",
    language: "english",
  });

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Content Writing",
    "Digital Marketing",
    "Other",
  ];
  const skillsList = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "UI Design",
    "Content Writing",
    "SEO",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillsChange = (skill) => {
    const updatedSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job posted", formData);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          {...fadeIn}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-6 text-white mb-8"
        >
          <h1 className="text-3xl font-bold">Post a New Job</h1>
          <p className="mt-2 text-primary-100">
            Find the perfect freelancer for your project
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          {/* Basic Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Basic Information
            </h2>

            <div>
              <label className=" text-gray-700 font-medium mb-2 flex items-center">
                <FaTag className="mr-2 text-primary-500" />
                Job Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="e.g. Build a Modern React Application"
                required
              />
            </div>

            <div>
              <label className=" text-gray-700 font-medium mb-2 flex items-center">
                <FaList className="mr-2 text-primary-500" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                rows={6}
                placeholder="Describe your project requirements, goals, and expectations"
                required
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Project Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className=" text-gray-700 font-medium mb-2 flex items-center">
                  <FaDollarSign className="mr-2 text-primary-500" />
                  Budget ($USD)
                </label>
                <input
                  name="budget"
                  type="number"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="e.g. 1500"
                  required
                />
              </div>

              <div>
                <label className=" text-gray-700 font-medium mb-2 flex items-center">
                  <FaCalendarAlt className="mr-2 text-primary-500" />
                  Deadline
                </label>
                <input
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className=" text-gray-700 font-medium mb-2 flex items-center">
                  <FaClock className="mr-2 text-primary-500" />
                  Estimated Hours
                </label>
                <input
                  name="estimatedHours"
                  type="number"
                  value={formData.estimatedHours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="e.g. 40"
                />
              </div>

              <div>
                <label className=" text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className=" text-gray-700 font-medium mb-2">
                Required Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillsChange(skill)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.skills.includes(skill)
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className=" text-gray-700 font-medium mb-2">
                  Experience Level
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div>
                <label className=" text-gray-700 font-medium mb-2 flex items-center">
                  <FaGlobe className="mr-2 text-primary-500" />
                  Project Language
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                >
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                  <option value="both">Both English & Arabic</option>
                </select>
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Post Job
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default PostJob;
