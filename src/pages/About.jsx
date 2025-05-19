import React from "react";
import { motion } from "framer-motion";

function About() {
  const stats = [
    { number: "10K+", label: "Active Freelancers" },
    { number: "5K+", label: "Satisfied Clients" },
    { number: "15K+", label: "Projects Completed" },
    { number: "95%", label: "Success Rate" },
  ];

    const teamMembers = [
      {
        name: "Alex Johnson",
        role: "CEO & Founder",
        bio: "Visionary leader with 10+ years in the gig economy",
        image: "img/per1.jpg",
      },
      {
        name: "Sarah Williams",
        role: "CTO",
        bio: "Tech innovator passionate about building scalable platforms",
        image: "img/per2.jpg",
      },
      {
        name: "Michael Chen",
        role: "Head of Community",
        bio: "Connects talents with opportunities that matter",
        image: "img/per3.jpg",
      },
      {
        name: "Emma Rodriguez",
        role: "Product Lead",
        bio: "Designs experiences that users love",
        image: "img/per4.jpg",
      },
    ];

  const values = [
    {
      title: "Innovation",
      description:
        "We continuously evolve our platform to provide cutting-edge solutions for the modern workforce.",
      icon: (
        <svg
          className="w-8 h-8 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Trust",
      description:
        "Building trust through transparency, security, and reliable service delivery.",
      icon: (
        <svg
          className="w-8 h-8 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Quality",
      description:
        "Maintaining high standards in every aspect of our service and platform.",
      icon: (
        <svg
          className="w-8 h-8 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Community",
      description:
        "Fostering a supportive environment for freelancers and clients to thrive together.",
      icon: (
        <svg
          className="w-8 h-8 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-700 to-primary-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About FreelanceHub
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Connecting talented freelancers with amazing clients worldwide
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-40 rounded-lg p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-5xl font-bold mb-6 text-primary-600">
                Our Mission
              </h2>
              <p className="text-lg text-primary-600 mb-6">
                We&apos;re on a mission to revolutionize the way people work by
                creating a platform that connects talented freelancers with
                clients looking for quality work. Our goal is to make remote
                work accessible, efficient, and rewarding for everyone involved.
              </p>
              <p className="text-lg text-primary-600">
                Through innovative technology and a commitment to excellence,
                we&apos;re building a future where work is more flexible,
                inclusive, and opportunity-rich than ever before.
              </p>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                src="img/mission.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary-400/20 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-4 text-primary-600">
              Our Values
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              The principles that guide us in creating the best possible
              platform for our community
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary-40 rounded-xl p-6 text-center"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-600">
                  {value.title}
                </h3>
                <p className="text-primary-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-40">
        <div className=" mx-auto" style={{ width: "80%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="text-primary-500 font-semibold mb-4">OUR TEAM</div>
            <h2 className="text-5xl font-bold mb-4 text-primary-600">
              Meet The Leadership
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              The passionate people behind FreelanceHub&apos;s success
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary-40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-primary-40 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-600 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary-500 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-primary-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
