"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiSpinningSword, GiLightningSpanner } from "react-icons/gi";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Elena Rodriguez",
      title: "Biotech Researcher",
      content: "The AI-enhanced research papers reduced my writing time by 60% while maintaining academic rigor. The hybrid human-AI process caught nuances I wouldn't have expected from algorithms alone.",
      rating: 5,
      avatar: "bg-gradient-to-br from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      id: 2,
      name: "James Chen",
      title: "Startup Founder",
      content: "Our investor pitch deck went from generic to compelling after SpectralScribe's narrative algorithms identified our unique value proposition. We secured $2M in seed funding!",
      rating: 5,
      avatar: "bg-gradient-to-br from-blue-500 to-cyan-400",
      delay: 0.2
    },
    {
      id: 3,
      name: "Sarah K.",
      title: "Fantasy Author",
      content: "The worldbuilding assistant helped me break through writer's block by generating culturally coherent magic systems. My editor said it was the most polished first draft she'd ever seen.",
      rating: 4,
      avatar: "bg-gradient-to-br from-amber-500 to-red-500",
      delay: 0.3
    },
    {
      id: 4,
      name: "Prof. David Müller",
      title: "Computer Science Chair",
      content: "For technical papers, the AI's ability to maintain precise terminology while varying sentence structure improved our publication acceptance rate by 40%.",
      rating: 5,
      avatar: "bg-gradient-to-br from-emerald-500 to-teal-400",
      delay: 0.4
    }
  ];

  useEffect(() => {
    controls.start({
      opacity: [0, 1, 1, 0],
      y: [50, 0, 0, -50],
      transition: { duration: 4, times: [0, 0.1, 0.9, 1] }
    });
    const timer = setInterval(() => {
      if (!isHovering) {
        nextTestimonial();
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, isHovering]);

  const nextTestimonial = () => {
    controls.start({ 
      opacity: 0,
      y: -50,
      transition: { duration: 0.5 }
    }).then(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      controls.start({ 
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    });
  };

  const prevTestimonial = () => {
    controls.start({ 
      opacity: 0,
      y: 50,
      transition: { duration: 0.5 }
    }).then(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      controls.start({ 
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    });
  };

  const hologramVariants = {
    rest: { 
      opacity: 0.7,
      scale: 0.98,
      boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)"
    },
    hover: {
      opacity: 1,
      scale: 1.02,
      boxShadow: [
        "0 0 20px rgba(168, 85, 247, 0.2)",
        "0 0 40px rgba(168, 85, 247, 0.3)",
        "0 0 60px rgba(168, 85, 247, 0.4)",
        "0 0 40px rgba(168, 85, 247, 0.3)",
        "0 0 20px rgba(168, 85, 247, 0.2)"
      ],
      transition: {
        boxShadow: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        },
        scale: { duration: 0.3 }
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Holographic grid background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
          }} />
        ))}
      </div>

      {/* Floating tech elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 text-purple-300/30 text-6xl"
      >
        <GiSpinningSword />
      </motion.div>
      
      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-12 text-blue-300/30 text-7xl"
      >
        <GiLightningSpanner />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Voices From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Digital Ether</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear how our AI-human symbiosis is transforming writing across industries
          </p>
        </motion.div>

        {/* Holographic testimonial card */}
        <div className="flex justify-center">
          <motion.div
            initial={false}
            animate={controls}
            variants={hologramVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl border border-purple-100 shadow-xl overflow-hidden relative"
            style={{
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.15)",
              borderImage: "linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.2)) 1"
            }}
          >
            {/* Holographic emission effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-[pulse_6s_ease-in-out_infinite] rounded-xl" />
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-400/5 via-transparent to-pink-400/5 animate-[spin_20s_linear_infinite] rounded-xl" />
            </div>

            <div className="relative z-10 p-8 md:p-10">
              <FaQuoteLeft className="text-purple-300 text-3xl mb-6" />
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {testimonials[activeIndex].content}
              </motion.p>

              <div className="flex items-center">
                <div className={`w-14 h-14 rounded-full ${testimonials[activeIndex].avatar} flex-shrink-0 mr-4`} />
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-purple-500 text-sm">{testimonials[activeIndex].title}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      i < testimonials[activeIndex].rating ? 
                        <FaStar key={i} className="text-amber-400 text-sm" /> : 
                        <FaRegStar key={i} className="text-amber-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center mt-10 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors"
          >
            <FaChevronLeft />
          </motion.button>
          
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== activeIndex) {
                    controls.start({ opacity: 0 }).then(() => {
                      setActiveIndex(index);
                      controls.start({ opacity: 1 });
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-purple-500" : "bg-purple-200"
                }`}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Floating avatars */}
        <div className="hidden md:flex justify-center mt-16 space-x-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (index !== activeIndex) {
                  controls.start({ opacity: 0 }).then(() => {
                    setActiveIndex(index);
                    controls.start({ opacity: 1 });
                  });
                }
              }}
              animate={{
                y: activeIndex === index ? [-5, 5, -5] : 0,
                opacity: activeIndex === index ? 1 : 0.6
              }}
              transition={{
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                opacity: { duration: 0.3 }
              }}
              className={`w-16 h-16 rounded-full ${testimonial.avatar} cursor-pointer shadow-md border-2 ${
                activeIndex === index ? "border-purple-500" : "border-white"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Future of Writing?</h3>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 30px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all"
          >
            
            <span className="relative">
              <span className="absolute -inset-1 bg-white/30 rounded-lg blur opacity-75 animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="relative">Start Your Writing Journey Now</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;