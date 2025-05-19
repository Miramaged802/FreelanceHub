import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    budget: "",
    experience: "",
    duration: "",
  });

  const [jobs] = useState([
    {
      id: 1,
      title: "Full Stack Developer Needed",
      description:
        "Looking for an experienced developer for a 3-month project...",
      budget: "$2000-$3000",
      category: "Web Development",
      experience: "Intermediate",
      duration: "3 months",
      skills: ["React", "Node.js", "MongoDB"],
      postedDate: "2024-02-20",
      proposals: 12,
    },
    {
      id: 2,
      title: "UI/UX Designer for Mobile App",
      description:
        "Need a creative designer for our upcoming mobile application...",
      budget: "$1500-$2500",
      category: "Design",
      experience: "Expert",
      duration: "2 months",
      skills: ["Figma", "UI Design", "Mobile Design"],
      postedDate: "2024-02-19",
      proposals: 8,
    },
    {
      id: 3,
      title: "WordPress Developer",
      description:
        "Looking for a WordPress expert to customize our business website...",
      budget: "$1000-$1500",
      category: "WordPress",
      experience: "Beginner",
      duration: "1 month",
      skills: ["WordPress", "PHP", "CSS"],
      postedDate: "2024-02-18",
      proposals: 15,
    },
    {
      id: 4,
      title: "Graphic Designer",
      description: "Looking for a graphic designer for a 2-month project...",
      budget: "$1000-$1500",
      category: "Design",
      experience: "Beginner",
      duration: "2 months",
      skills: ["Graphic Design", "Photoshop", "Illustrator"],
      postedDate: "2024-02-17",
      proposals: 10,
    },
    {
      id: 5,
      title: "Social Media Manager",
      description:
        "Looking for a social media manager for a 1-month project...",
      budget: "$1000-$1500",
      category: "Marketing",
      experience: "Beginner",
      duration: "1 month",
      skills: ["Social Media", "Marketing", "Content Creation"],
      postedDate: "2024-02-16",
      proposals: 12,
    },
  ]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filters.category || job.category === filters.category) &&
      (!filters.experience || job.experience === filters.experience) &&
      (!filters.duration || job.duration === filters.duration)
    );
  });

  const handleAddProposal = (job) => {
    navigate("/proposal", { state: { job } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Available Jobs</h1>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="WordPress">WordPress</option>
            <option value="Marketing">Marketing</option>
          </select>

          <select
            value={filters.experience}
            onChange={(e) => handleFilterChange("experience", e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Experience Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>

          <select
            value={filters.duration}
            onChange={(e) => handleFilterChange("duration", e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Durations</option>
            <option value="1 month">1 month</option>
            <option value="2 months">2 months</option>
            <option value="3 months">3 months</option>
          </select>

          <button
            onClick={() =>
              setFilters({
                category: "",
                budget: "",
                experience: "",
                duration: "",
              })
            }
            className="px-4 py-2 text-primary-600 hover:text-primary-700 transition-colors bg-primary-50 border border-primary-600 rounded-md"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {job.title}
                </h2>
                <p className="text-gray-600 mb-4">{job.description}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-primary-600">
                  {job.budget}
                </p>
                <p className="text-sm text-gray-500">
                  {job.proposals} proposals
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="space-x-4">
                <span>{job.category}</span>
                <span>•</span>
                <span>{job.experience}</span>
                <span>•</span>
                <span>{job.duration}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>Posted {job.postedDate}</span>
                <button
                  onClick={() => handleAddProposal(job)}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Add Proposal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
