"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearch, FaBookOpen, FaRegLightbulb, FaRegStar, FaStar } from "react-icons/fa";
import { GiSpellBook, GiPencilBrush } from "react-icons/gi";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number| null>();

  const filters = [
    { id: "all", label: "All Genres" },
    { id: "fiction", label: "Fiction" },
    { id: "non-fiction", label: "Non-Fiction" },
    { id: "academic", label: "Academic" },
    { id: "business", label: "Business" }
  ];

  const projects = [
    {
      id: 1,
      title: "Quantum Shadows",
      type: "Sci-Fi Novel",
      genre: "fiction",
      description: "A cyberpunk thriller exploring AI consciousness",
      rating: 4.8,
      cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tags: ["AI", "Future", "Dystopia"]
    },
    {
      id: 2,
      title: "The Data Mind",
      type: "Research Paper",
      genre: "academic",
      description: "Neuroscience meets machine learning in cognitive studies",
      rating: 4.9,
      cover: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
      tags: ["Science", "Psychology", "ML"]
    },
    {
      id: 3,
      title: "Startup Alchemy",
      type: "Business Guide",
      genre: "business",
      description: "Turning ideas into unicorns with lean methodology",
      rating: 4.7,
      cover: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      tags: ["Entrepreneurship", "Growth", "Case Studies"]
    },
    {
      id: 4,
      title: "Echoes of Eternity",
      type: "Fantasy Novel",
      genre: "fiction",
      description: "Epic fantasy with time-bending magic systems",
      rating: 4.9,
      cover: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      tags: ["Magic", "Adventure", "Worldbuilding"]
    },
    {
      id: 5,
      title: "The Biotech Revolution",
      type: "Non-Fiction",
      genre: "non-fiction",
      description: "How CRISPR is reshaping humanity's future",
      rating: 4.6,
      cover: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
      tags: ["Science", "Ethics", "Innovation"]
    },
    {
      id: 6,
      title: "Digital Nomad Blueprint",
      type: "Business Guide",
      genre: "business",
      description: "Building location-independent income streams",
      rating: 4.5,
      cover: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      tags: ["Remote Work", "Marketing", "Automation"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.genre === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm">
            <GiSpellBook className="text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-600">Manuscript Portfolio</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Words That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Resonate</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of AI-enhanced writings across genres
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-purple-300"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-16 relative"
        >
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search manuscripts..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-100 outline-none transition-all shadow-sm"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Book Cover */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ background: project.cover }}
              >
                <motion.div
                  animate={{
                    opacity: hoveredCard === project.id ? 1 : 0,
                    y: hoveredCard === project.id ? 0 : 20
                  }}
                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                >
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium flex items-center shadow-lg">
                    <FaBookOpen className="mr-2" /> Preview
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-purple-500">{project.type}</p>
                  </div>
                  <div className="flex items-center bg-purple-50 px-2 py-1 rounded">
                    {[...Array(5)].map((_, i) => (
                      i < Math.floor(project.rating) ? 
                        <FaStar key={i} className="text-amber-400 text-xs" /> : 
                        <FaRegStar key={i} className="text-amber-400 text-xs" />
                    ))}
                    <span className="text-xs font-bold text-amber-600 ml-1">{project.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-4 py-2 border border-purple-200 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors flex items-center justify-center"
                >
                  <GiPencilBrush className="mr-2" /> Request Similar Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See What You Need?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our AI can adapt to any writing style or genre. Describe your project and we'll craft a custom sample.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 20px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-medium inline-flex items-center shadow-lg"
          >
            <FaRegLightbulb className="mr-2" /> Request Custom Sample
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;