"use client";
import { motion } from "framer-motion";
import { FaRobot, FaBookOpen, FaBlog, FaGraduationCap, FaFilm } from "react-icons/fa";
import { GiSpellBook, GiArtificialIntelligence } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      icon: <FaBookOpen className="text-3xl text-purple-500" />,
      title: "Book Manuscripts",
      description: "AI-assisted novel writing with human editing. Perfect for fiction/non-fiction.",
      features: ["Chapter outlining", "Character development", "Genre-specific templates"],
      hoverColor: "from-purple-100 to-white"
    },
    {
      icon: <FaBlog className="text-3xl text-pink-500" />,
      title: "Blog Articles",
      description: "SEO-optimized content that ranks, written in your brand voice.",
      features: ["Keyword research", "Listicles & guides", "Monthly content packages"],
      hoverColor: "from-pink-100 to-white"
    },
    {
      icon: <FaFilm className="text-3xl text-blue-500" />,
      title: "Scriptwriting",
      description: "Screenplays and video scripts with dramatic pacing analysis.",
      features: ["Dialogue polishing", "Scene structuring", "Industry-standard formatting"],
      hoverColor: "from-blue-100 to-white"
    },
    {
      icon: <FaGraduationCap className="text-3xl text-amber-500" />,
      title: "Academic Writing",
      description: "Research papers with proper citations and plagiarism checks.",
      features: ["Thesis statements", "Literature reviews", "Peer-reviewed formatting"],
      hoverColor: "from-amber-100 to-white"
    }
  ];

  return (
    <section id="ai" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
            <FaRobot className="text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-600">AI-Powered Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Human Creativity <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">×</span> Machine Precision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our hybrid approach combines the best of artificial intelligence with professional ghostwriters.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-b ${service.hoverColor} border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-white shadow-sm border border-gray-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full py-2 px-4 border border-gray-200 rounded-lg text-sm font-medium text-purple-600 hover:bg-purple-50 transition-colors"
              >
                View Samples
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* AI Process Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-purple-100"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our AI-Enhanced Workflow</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Concept Generation", desc: "AI suggests themes based on your input" },
                  { step: "2", title: "Human-AI Co-Writing", desc: "Professional writers refine the AI's draft" },
                  { step: "3", title: "Quality Assurance", desc: "Plagiarism checks & style consistency" }
                ].map((item) => (
                  <div key={item.step} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-purple-200 text-purple-600 font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block relative">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
                className="text-purple-300/70 text-8xl mx-auto"
              >
                <GiArtificialIntelligence />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-4xl"
              >
                <GiSpellBook />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;