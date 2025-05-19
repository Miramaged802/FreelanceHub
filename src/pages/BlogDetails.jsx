import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "../data/blogData";
import { motion } from "framer-motion";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Blog post not found
          </h2>
          <p className="text-gray-600 mb-6">
            The article you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => navigate("/blog")}
                className="mb-6 text-white/80 hover:text-white flex items-center gap-2 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </button>
              <span className="inline-block px-4 py-2 bg-primary-500 rounded-full text-sm text-white mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full border-2 border-white/20"
                  />
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-white/70">{post.date}</div>
                  </div>
                </div>
                <div className="text-sm flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-5 h-5"
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
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    2.5k views
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="text-gray-800" style={{ whiteSpace: "pre-line" }}>
                {post.content}
              </div>
            </motion.div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                {["Twitter", "Facebook", "LinkedIn", "Copy Link"].map(
                  (platform) => (
                    <button
                      key={platform}
                      className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                    >
                      {platform}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>



        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map((relatedPost) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${relatedPost.id}`)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{relatedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
