"use client";
import { motion } from "framer-motion";
import { FaRobot, FaPenAlt, FaArrowRight } from "react-icons/fa";
import { GiSpellBook, GiArtificialIntelligence } from "react-icons/gi";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-purple-50 pt-32 pb-20 overflow-hidden">
      {/* Floating AI bubbles (background decor) */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 text-pink-300/30 text-6xl"
      >
        <GiSpellBook />
      </motion.div>
      
      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-20 text-blue-300/30 text-7xl"
      >
        <GiArtificialIntelligence />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Next-Gen
              </span>{" "}
              <br />
              Ghostwriting
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Where <span className="font-semibold text-purple-500">human creativity</span> meets{" "}
              <span className="font-semibold text-blue-500">AI precision</span>. 
              Perfect manuscripts, faster than ever.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 5px 20px rgba(168, 85, 247, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium flex items-center"
              >
                Start Your Project <FaArrowRight className="ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-purple-200 bg-white/80 text-purple-600 px-6 py-3 rounded-xl font-medium flex items-center"
              >
                <FaRobot className="mr-2 text-blue-400" /> About me
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center space-x-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-200 to-purple-300"
                  />
                ))}
              </div>
              <p>Trusted by 500+ authors worldwide</p>
            </motion.div>
          </div>
          
          {/* Right column - Animated book illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Book base */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 border border-purple-100 transform rotate-2">
                {/* Book cover */}
                <div className="bg-gradient-to-r from-purple-100 to-blue-50 rounded-lg p-6 shadow-inner border border-white">
                  {/* Animated typing indicator */}
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse delay-100" />
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-200" />
                  </div>
                  
                  {/* AI writing sample */}
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-blue-200/50 rounded animate-pulse" />
                    <div className="h-4 w-3/4 bg-pink-200/50 rounded animate-pulse delay-75" />
                    <div className="h-4 w-5/6 bg-purple-200/50 rounded animate-pulse delay-100" />
                    <div className="h-4 w-2/3 bg-blue-200/50 rounded animate-pulse delay-150" />
                  </div>
                  
                  {/* Pen icon floating over book */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 text-pink-400 bg-white p-2 rounded-full shadow-lg border border-pink-100"
                  >
                    <FaPenAlt className="text-xl" />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating AI assistant */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-xl border border-blue-100"
              >
                <FaRobot className="text-2xl text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;