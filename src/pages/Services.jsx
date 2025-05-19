// import React from "react";
// import { motion } from "framer-motion";

// function Services() {
//   const services = [
//     {
//       id: 1,
//       title: "Freelance Talent Solutions",
//       description: "Access top-tier freelancers across various domains",
//       features: [
//         "Verified professional freelancers",
//         "Skill-based matching system",
//         "Real-time collaboration tools",
//         "Secure payment protection",
//       ],
//       icon: (
//         <svg
//           className="w-12 h-12 text-primary-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Project Management",
//       description: "Comprehensive tools for successful project delivery",
//       features: [
//         "Milestone tracking",
//         "Time management tools",
//         "Budget monitoring",
//         "Progress reporting",
//       ],
//       icon: (
//         <svg
//           className="w-12 h-12 text-primary-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "Secure Payments",
//       description: "Safe and reliable payment processing system",
//       features: [
//         "Escrow protection",
//         "Multiple payment methods",
//         "Automated invoicing",
//         "Currency conversion",
//       ],
//       icon: (
//         <svg
//           className="w-12 h-12 text-primary-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: "Skills Development",
//       description: "Resources for continuous professional growth",
//       features: [
//         "Online training courses",
//         "Skill assessments",
//         "Certification programs",
//         "Mentorship opportunities",
//       ],
//       icon: (
//         <svg
//           className="w-12 h-12 text-primary-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//           />
//         </svg>
//       ),
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">
//             Our Services
//           </h1>
//           <p className="text-xl text-primary-500 max-w-3xl mx-auto">
//             Empowering businesses and freelancers with comprehensive solutions
//             for successful collaboration and growth
//           </p>
//         </motion.div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={itemVariants}
//               className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105 border border-primary-100"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="flex-shrink-0 bg-primary-50 p-3 rounded-lg">
//                   {service.icon}
//                 </div>
//                 <h3 className="ml-4 text-2xl font-semibold text-primary-600">
//                   {service.title}
//                 </h3>
//               </div>
//               <p className="text-primary-500 mb-6">{service.description}</p>
//               <ul className="space-y-3">
//                 {service.features.map((feature, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center text-primary-400"
//                   >
//                     <svg
//                       className="w-5 h-5 text-primary-500 mr-3"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//     </div>
//   );
// }

// export default Services;

import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      id: 1,
      title: "Freelance Talent Solutions",
      description:
        "Access top-tier freelancers across various domains with our curated network of professionals",
      features: [
        "Verified professional freelancers",
        "Skill-based matching system",
        "Real-time collaboration tools",
        "Secure payment protection",
      ],
      icon: (
        <svg
          className="w-12 h-12 text-primary-500"
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
      id: 2,
      title: "Project Management",
      description:
        "Comprehensive tools for successful project delivery from start to finish",
      features: [
        "Milestone tracking",
        "Time management tools",
        "Budget monitoring",
        "Progress reporting",
      ],
      icon: (
        <svg
          className="w-12 h-12 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Secure Payments",
      description:
        "Safe and reliable payment processing system with multiple options",
      features: [
        "Escrow protection",
        "Multiple payment methods",
        "Automated invoicing",
        "Currency conversion",
      ],
      icon: (
        <svg
          className="w-12 h-12 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Skills Development",
      description: "Resources for continuous professional growth and learning",
      features: [
        "Online training courses",
        "Skill assessments",
        "Certification programs",
        "Mentorship opportunities",
      ],
      icon: (
        <svg
          className="w-12 h-12 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Post Your Project",
      description: "Describe your needs and requirements in detail",
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Review Proposals",
      description: "Evaluate freelancers and select the best match",
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
      step: 3,
      title: "Collaborate Securely",
      description: "Work together using our built-in tools",
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
    {
      step: 4,
      title: "Pay with Confidence",
      description: "Release payment when you're satisfied",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Reduce hiring time with our efficient matching system",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Cost Effective",
      description: "Get quality work at competitive rates",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      description: "Verified professionals with proven track records",
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
      title: "Flexibility",
      description: "Scale your team up or down as needed",
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive solutions designed to connect talent with opportunity
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary-600">
              Tailored Solutions for Your Needs
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Discover services designed to streamline your workflow and
              maximize productivity
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-10 md:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 bg-primary-50 p-3 rounded-xl">
                    {service.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-500">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-primary-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary-600">
              Simple and Transparent Process
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Get started quickly with our streamlined workflow
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary-40 rounded-xl p-8 text-center relative overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 text-7xl font-bold text-gray-100 opacity-50">
                  0{step.step}
                </div>
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary-600">
              Key Benefits for Your Business
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Experience the advantages of our comprehensive platform
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-primary-600 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary-600 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;