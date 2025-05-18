"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPenAlt, FaBars, FaTimes, FaRobot } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";

const FuturisticGhostWriterNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "AI Services", href: "#ai" },
    { name: "Manuscripts", href: "#portfolio" },
    { name: "Testimonials", href: "#reviews" },
    { name: "Pricing", href: "#pricing" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100 fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center space-x-2"
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="text-pink-400"
            >
              <GiSpellBook className="h-8 w-8" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SpectralScribe
            </span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-blue-400"
            >
              <FaRobot className="h-5 w-5" />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="ml-10 flex items-center space-x-6"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={itemVariants}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-lg text-sm font-medium relative group transition-colors"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 group-hover:w-3/4 transition-all duration-300 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "75%" }}
                  />
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-lg"
              >
                Start Writing
                <FaPenAlt className="inline ml-2" />
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden shadow-inner"
        >
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl text-base font-medium shadow-md"
            >
              Start Writing
              <FaPenAlt className="inline ml-2" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default FuturisticGhostWriterNavbar;