import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// JobCard Component
const JobCard = ({ job, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-white  rounded-xl shadow-glass backdrop-blur-xs border border-primary-400  p-6 transition-all duration-300 hover:shadow-lg flex flex-col"
    role="article"
    aria-labelledby={`job-title-${job.id}`}
  >
    <div className="flex justify-between items-start mb-4">
      <h3
        id={`job-title-${job.id}`}
        className="text-xl font-semibold text-primary-600  line-clamp-2"
      >
        {job.title}
      </h3>
      <span className="bg-primary-100  text-primary-700  text-sm font-medium px-3 py-1 rounded-full">
        {job.budget}
      </span>
    </div>
    <p className="text-primary-600  mb-4 line-clamp-3 flex-1">
      {job.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {job.skills.map((skill) => (
        <span
          key={skill}
          className="bg-neutral-100  text-primary-700  px-3 py-1 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center text-sm text-primary-700">
      <span>{job.company}</span>
      <span>{job.location}</span>
    </div>
  </motion.div>
);

// StepCard Component (updated to card style)
const StepCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    whileHover={{ y: -5, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
    className="bg-white rounded-xl shadow-glass border border-primary-100 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
  >
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
      {item.icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-primary-700">
      {item.title}
    </h3>
    <p className="text-primary-600">{item.description}</p>
  </motion.div>
);

// TestimonialCard Component
const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-white  rounded-xl shadow-glass backdrop-blur-xs border border-primary-400  p-6 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
  >
    <img
      src={testimonial.avatar}
      alt={`${testimonial.name}'s avatar`}
      className="w-16 h-16 rounded-full mb-4 object-cover"
    />
    <p className="text-primary-600  mb-4 italic">
      &quot;{testimonial.quote}&quot;
    </p>
    <h4 className="text-lg font-semibold text-primary-700 ">
      {testimonial.name}
    </h4>
    <p className="text-sm text-primary-600">
      {testimonial.role}
    </p>
  </motion.div>
);

// CategoryCard Component
const CategoryCard = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-white  rounded-xl shadow-glass backdrop-blur-xs border-2 border-primary-100  p-6 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
  >
    <div className="w-12 h-12 text-primary-600  mb-4">
      {category.icon}
    </div>
    <h3 className="text-lg font-semibold text-primary-700  mb-4">
      {category.name}
    </h3>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center px-6 py-2 border-2 border-primary-600 text-primary-600  hover:bg-primary-600 hover:text-white  rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
    >
      <Link to={`/categories/${category.id}`}>Explore</Link>
    </motion.div>
  </motion.div>
);

function Home() {
  const [featuredJobs] = useState([
    {
      id: 1,
      title: "Full Stack Developer Needed",
      budget: "$2000-$3000",
      description:
        "Looking for an experienced developer for a 3-month project...",
      skills: ["React", "Node.js", "MongoDB"],
      company: "TechCorp Inc.",
      location: "Remote",
    },
    {
      id: 2,
      title: "UI/UX Designer for Mobile App",
      budget: "$1500-$2500",
      description:
        "Need a creative designer for our upcoming mobile application...",
      skills: ["Figma", "UI Design", "Mobile Design"],
      company: "DesignPro Agency",
      location: "Remote",
    },
    {
      id: 3,
      title: "Content Writer for Blog",
      budget: "$1000-$1500",
      description: "Seeking an experienced content writer for our tech blog...",
      skills: ["Content Writing", "SEO", "Technical Writing"],
      company: "ContentMasters",
      location: "Remote",
    },
    {
      id: 4,
      title: "DevOps Engineer for Cloud Migration",
      budget: "$3000-$4500",
      description: "Need an expert in AWS and CI/CD for cloud migration...",
      skills: ["AWS", "Docker", "Kubernetes"],
      company: "CloudSync Solutions",
      location: "Remote",
    },
  ]);

  const testimonials = [
    {
      id: 1,
      quote:
        "FreelanceHub connected me with top-tier talent that delivered beyond expectations.",
      name: "Sarah Johnson",
      role: "Startup Founder",
      avatar: "img/per1.jpg",
    },
    {
      id: 2,
      quote:
        "As a freelancer, I found amazing projects that matched my skills perfectly.",
      name: "Michael Chen",
      role: "UI/UX Designer",
      avatar: "img/per2.jpg",
    },
    {
      id: 3,
      quote: "The platform is intuitive, and the support team is fantastic!",
      name: "Emily Davis",
      role: "Content Writer",
      avatar: "img/per3.jpg",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Development",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Design",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 20h9M12 4v16m0-16h9M3 4h9m-9 16h9"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Writing",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Marketing",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },

  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-700 to-primary-800  overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Discover Top Freelance Talent
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-neutral-100 max-w-3xl mx-auto">
            Connect with skilled freelancers to bring your projects to life with
            ease and confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
            >
              <Link to="/register">Get Started</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 dark:hover:text-primary-800 rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
            >
              <Link to="/jobs">Browse Jobs</Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white  w-full">
        <div className=" mx-auto" style={{ width: "80%" }}>
          <h2 className="text-5xl font-bold mb-3 text-center text-primary-800">
            Featured Opportunities
          </h2>
          <p className=" text-center text-lg text-primary-700 mb-12">
            Explore the latest freelance projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-40 ">
        <div className=" mx-auto" style={{ width: "80%" }}>
          <h2 className="text-5xl font-bold mb-3 text-center text-primary-600 ">
            Popular Categories
          </h2>
          <p className="text-primary-600 text-center text-lg mb-12">
            Find freelancers in the skills you need most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="mx-auto" style={{ width: "80%" }}>
          <h2 className="text-5xl font-bold mb-3 text-center text-primary-600">
            How It Works
          </h2>
          <p className="text-primary-600 text-center text-lg mb-12">
            Get started in just a few steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            {[
              {
                step: 1,
                title: "Post a Job",
                description:
                  "Create a detailed job posting to find the perfect freelancer.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                ),
              },
              {
                step: 2,
                title: "Review Proposals",
                description:
                  "Compare proposals and select the best freelancer for your project.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                step: 3,
                title: "Get Work Done",
                description:
                  "Collaborate with your freelancer to complete your project successfully.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                step: 4,
                title: "Get Paid",
                description: "Get paid for your work and get paid on time.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <StepCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-40 ">
        <div className=" mx-auto" style={{ width: "80%" }}>
          <h2 className="text-5xl font-bold mb-3 text-center text-primary-600 ">
            What Our Users Say
          </h2>
          <p className="text-primary-600 text-center text-lg mb-12">
            Hear from clients and freelancers who love FreelanceHub.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
