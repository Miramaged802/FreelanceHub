import React, { useState } from "react";
import { motion } from "framer-motion";
import blogPosts from "../data/blogData";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced with gradient and pattern */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Insights & Stories
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover expert insights, industry trends, and success stories from
            the world of freelancing.
          </p>
        </motion.div>
      </section>

      {/* Categories - Enhanced with better spacing and animations */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-100"
                    : "bg-white border-2 border-primary-200 text-primary-600 hover:border-primary-600"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post - Enhanced with better hover effects */}
      {filteredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => navigate(`/blog/${filteredPosts[0].id}`)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                <div className="p-8 sm:p-12 w-full">
                  <span className="inline-block px-4 py-1.5 bg-primary-500 rounded-full text-sm font-medium text-white mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors duration-300">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-lg text-white/80 mb-6 max-w-3xl">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/70">
                    <img
                      src={filteredPosts[0].author.avatar}
                      alt={filteredPosts[0].author.name}
                      className="w-12 h-12 rounded-full border-2 border-white/20"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium text-white">
                        {filteredPosts[0].author.name}
                      </span>
                      <span className="text-sm">
                        {filteredPosts[0].date} · {filteredPosts[0].readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid - Enhanced with better card design */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.slice(1).map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Blog;
