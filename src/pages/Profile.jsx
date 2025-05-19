import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      link: "#",
    },
  ],
  company: "Acme Corp",
  jobsPosted: 12,
  hires: 8,
  companyDescription:
    "Leading tech company hiring top freelancers for innovative projects.",
  usersManaged: 120,
  reportsHandled: 15,
};

function Profile() {
  const { isAuthenticated, userType, user } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  const profile = {
    role: userType,
    name: user.fullName || user.email,
    ...defaultProfileData,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
            <p className="text-xl text-gray-600 mb-2">{profile.title}</p>
            <p className="text-gray-500 mb-4">{profile.location}</p>
            
            {/* Freelancer stats */}
            {profile.role === "freelancer" && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-light">
                    ${profile.hourlyRate}
                  </p>
                  <p className="text-sm text-gray-500">Hourly Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-light">
                    {profile.rating}
                  </p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-light">
                    {profile.completedProjects}
                  </p>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>
              </div>
            )}
            {/* Client stats */}
            {profile.role === "client" && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-light">
                    {profile.jobsPosted}
                  </p>
                  <p className="text-sm text-gray-500">Jobs Posted</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-light">
                    {profile.hires}
                  </p>
                  <p className="text-sm text-gray-500">Hires</p>
                </div>
              </div>
            )}
            {/* Admin stats */}
            {profile.role === "admin" && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-light">
                    {profile.usersManaged}
                  </p>
                  <p className="text-sm text-gray-500">Users Managed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-light">
                    {profile.reportsHandled}
                  </p>
                  <p className="text-sm text-gray-500">Reports Handled</p>
                </div>
              </div>
            )}
          </div>
          <button className="bg-primary-light hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
      {/* About Section (Freelancer/Client) */}
      {(profile.role === "freelancer" || profile.role === "client") && (
        <div className="bg-surface rounded-lg shadow-card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p>
            {profile.role === "freelancer"
              ? profile.bio
              : profile.companyDescription}
          </p>
        </div>
      )}
      {/* Skills, Experience, Education, Portfolio (Freelancer only) */}
      {profile.role === "freelancer" && (
        <>
          <div className="bg-surface rounded-lg shadow-card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-surface rounded-lg shadow-card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-b last:border-0 pb-6 last:pb-0"
                >
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary-light mb-1">{exp.company}</p>
                  <p className="text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface rounded-lg shadow-card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary-light mb-1">{edu.school}</p>
                  <p className="text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface rounded-lg shadow-card p-6">
            <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.portfolio.map((project, index) => (
                <div key={index} className="group relative">
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
                        className="inline-block bg-primary-light hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {/* Client-specific: Jobs Posted (example) */}
      {profile.role === "client" && (
        <div className="bg-surface rounded-lg shadow-card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Jobs Posted</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Frontend Developer for E-commerce Website</li>
            <li>Mobile App Designer</li>
            <li>Backend API Integration</li>
          </ul>
        </div>
      )}
      {/* Admin-specific: Admin Tools */}
      {profile.role === "admin" && (
        <div className="bg-surface rounded-lg shadow-card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Admin Tools</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>User Management</li>
            <li>Report Center</li>
            <li>Site Analytics</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
