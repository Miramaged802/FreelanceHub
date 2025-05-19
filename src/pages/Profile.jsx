import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTimes, FaCog, FaEnvelope } from "react-icons/fa";

const defaultProfileData = {
  title: "Full Stack Developer",
  location: "San Francisco, CA",
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  hourlyRate: 50,
  rating: 4.8,
  completedProjects: 45,
  bio: "Experienced full stack developer with a passion for creating efficient and scalable web applications. Specialized in React, Node.js, and cloud technologies.",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "Python",
  ],
  education: [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      year: "2020",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "University of California, Berkeley",
      year: "2018",
    },
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description:
        "Led development of enterprise web applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations LLC",
      period: "2018 - 2020",
      description:
        "Developed and maintained multiple client websites. Collaborated with design team to implement responsive UI/UX designs.",
    },
  ],
  portfolio: [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform built with React and Node.js",
      image:
        "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A real-time collaborative task management application",
      image:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      link: "#",
    },
  ],
  company: {
    name: "Acme Corp",
    industry: "Technology",
    size: "50-100",
    founded: "2015",
    website: "www.acmecorp.com",
    description:
      "Leading tech company hiring top freelancers for innovative projects.",
  },
  clientStats: {
    jobsPosted: 12,
    activeJobs: 3,
    completedJobs: 8,
    totalSpent: 25000,
    averageRating: 4.7,
    preferredCategories: ["Web Development", "Mobile Apps", "UI/UX Design"],
  },
  adminStats: {
    usersManaged: 120,
    reportsHandled: 15,
    activeProjects: 45,
    totalRevenue: 150000,
    platformMetrics: {
      newUsers: 250,
      activeUsers: 1200,
      completedProjects: 350,
    },
  },
};

function Profile() {
  const { isAuthenticated, userType, user } = useSelector(
    (state) => state.auth
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const profile = {
    role: userType,
    name:
      userType === "client" || userType === "freelancer"
        ? `${user.firstName} ${user.lastName}`
        : user.fullName || user.email,
    ...defaultProfileData,
  };

  const handleEditClick = () => {
    setEditedProfile(profile);
    setIsEditModalOpen(true);
  };

  const handleInputChange = (section, field, value) => {
    setEditedProfile((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    console.log("Updated profile:", editedProfile);
    setIsEditModalOpen(false);
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleMessagesClick = () => {
    navigate("/messages");
  };

  const renderEditForm = () => {
    switch (profile.role) {
      case "freelancer":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={editedProfile.firstName || ""}
                  onChange={(e) =>
                    handleInputChange("user", "firstName", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={editedProfile.lastName || ""}
                  onChange={(e) =>
                    handleInputChange("user", "lastName", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={editedProfile.title}
                onChange={(e) =>
                  handleInputChange("profile", "title", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={editedProfile.location}
                onChange={(e) =>
                  handleInputChange("profile", "location", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hourly Rate
              </label>
              <input
                type="number"
                value={editedProfile.hourlyRate}
                onChange={(e) =>
                  handleInputChange("profile", "hourlyRate", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                value={editedProfile.bio}
                onChange={(e) =>
                  handleInputChange("profile", "bio", e.target.value)
                }
                rows="4"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills (comma-separated)
              </label>
              <input
                type="text"
                value={editedProfile.skills.join(", ")}
                onChange={(e) =>
                  handleInputChange(
                    "profile",
                    "skills",
                    e.target.value.split(", ")
                  )
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
          </form>
        );

      case "client":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={editedProfile.firstName || ""}
                  onChange={(e) =>
                    handleInputChange("user", "firstName", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={editedProfile.lastName || ""}
                  onChange={(e) =>
                    handleInputChange("user", "lastName", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={editedProfile.company.name}
                onChange={(e) =>
                  handleInputChange("company", "name", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <input
                type="text"
                value={editedProfile.company.industry}
                onChange={(e) =>
                  handleInputChange("company", "industry", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Website
              </label>
              <input
                type="text"
                value={editedProfile.company.website}
                onChange={(e) =>
                  handleInputChange("company", "website", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Description
              </label>
              <textarea
                value={editedProfile.company.description}
                onChange={(e) =>
                  handleInputChange("company", "description", e.target.value)
                }
                rows="4"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Categories (comma-separated)
              </label>
              <input
                type="text"
                value={editedProfile.clientStats.preferredCategories.join(", ")}
                onChange={(e) =>
                  handleInputChange(
                    "clientStats",
                    "preferredCategories",
                    e.target.value.split(", ")
                  )
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
          </form>
        );

      case "admin":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={editedProfile.firstName || ""}
                  onChange={(e) =>
                    handleInputChange("user", "firstName", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={editedProfile.lastName || ""}
                  onChange={(e) =>
                    handleInputChange("user", "lastName", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Role
              </label>
              <input
                type="text"
                value="Platform Administrator"
                disabled
                className="w-full px-4 py-2 rounded-lg border bg-gray-100"
              />
            </div>
          </form>
        );

      default:
        return null;
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const renderRoleSpecificContent = () => {
    switch (profile.role) {
      case "freelancer":
        return (
          <>
            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-0 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary-600 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-primary-600 mb-1">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profile.portfolio.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <div className="text-center p-4">
                        <h3 className="text-white text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm mb-4">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        );

      case "client":
        return (
          <>
            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(profile.company).map(([key, value]) => (
                  <div key={key}>
                    <h3 className="font-semibold capitalize mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Hiring Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600">
                    {profile.clientStats.jobsPosted}
                  </h3>
                  <p className="text-gray-600">Jobs Posted</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600">
                    {profile.clientStats.completedJobs}
                  </h3>
                  <p className="text-gray-600">Completed Jobs</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600">
                    ${profile.clientStats.totalSpent.toLocaleString()}
                  </h3>
                  <p className="text-gray-600">Total Spent</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Preferred Categories</h2>
              <div className="flex flex-wrap gap-2">
                {profile.clientStats.preferredCategories.map((category) => (
                  <span
                    key={category}
                    className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </motion.div>
          </>
        );

      case "admin":
        return (
          <>
            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Platform Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600">
                    {profile.adminStats.usersManaged}
                  </h3>
                  <p className="text-gray-600">Users Managed</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600">
                    {profile.adminStats.reportsHandled}
                  </h3>
                  <p className="text-gray-600">Reports Handled</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600">
                    {profile.adminStats.activeProjects}
                  </h3>
                  <p className="text-gray-600">Active Projects</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600">
                    ${profile.adminStats.totalRevenue.toLocaleString()}
                  </h3>
                  <p className="text-gray-600">Total Revenue</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Platform Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(profile.adminStats.platformMetrics).map(
                  ([key, value]) => (
                    <div key={key} className="bg-primary-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary-600">
                        {value}
                      </h3>
                      <p className="text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-primary-100"
          />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <h1 className="text-3xl font-bold">{profile.name}</h1>
              {profile.role === "client" && (
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  Client
                </span>
              )}
              {profile.role === "freelancer" && (
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  Freelancer
                </span>
              )}
            </div>
            {profile.role === "client" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {profile.company.name}
                </p>
                <p className="text-gray-500 mb-4">{profile.company.industry}</p>
              </>
            ) : (
              <>
                <p className="text-xl text-gray-600 mb-2">{profile.title}</p>
                <p className="text-gray-500 mb-4">{profile.location}</p>
              </>
            )}

            {/* Role-specific stats */}
            {profile.role === "freelancer" && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    ${profile.hourlyRate}
                  </p>
                  <p className="text-sm text-gray-500">Hourly Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.rating}
                  </p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.completedProjects}
                  </p>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>
              </div>
            )}

            {profile.role === "client" && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.clientStats.jobsPosted}
                  </p>
                  <p className="text-sm text-gray-500">Jobs Posted</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.clientStats.completedJobs}
                  </p>
                  <p className="text-sm text-gray-500">Completed Jobs</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.clientStats.averageRating}
                  </p>
                  <p className="text-sm text-gray-500">Average Rating</p>
                </div>
              </div>
            )}

            {profile.role === "admin" && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.adminStats.usersManaged}
                  </p>
                  <p className="text-sm text-gray-500">Users Managed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.adminStats.reportsHandled}
                  </p>
                  <p className="text-sm text-gray-500">Reports Handled</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {profile.adminStats.activeProjects}
                  </p>
                  <p className="text-sm text-gray-500">Active Projects</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEditClick}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaEdit />
              Edit Profile
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSettingsClick}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaCog />
              Settings
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMessagesClick}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaEnvelope />
              Messages
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Role-specific content */}
      {renderRoleSpecificContent()}

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Edit Profile</h2>
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
                {renderEditForm()}
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Profile;
