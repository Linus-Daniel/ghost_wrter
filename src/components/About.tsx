"use client"
import { motion } from "framer-motion";
import { FaRegLightbulb, FaRobot } from "react-icons/fa";
import { GiProgression, GiSpinningSword } from "react-icons/gi";

const About = () => {
    const milestones = [
      {
        year: "2018",
        title: "Founded",
        description: "Started as a small team of writers and engineers passionate about AI",
        icon: <FaRegLightbulb className="text-2xl text-purple-500" />
      },
      {
        year: "2020",
        title: "AI Integration",
        description: "Developed our proprietary writing assistant algorithms",
        icon: <FaRobot className="text-2xl text-blue-500" />
      },
      {
        year: "2022",
        title: "Hybrid Model",
        description: "Perfected the human-AI collaboration workflow",
        icon: <GiProgression className="text-2xl text-pink-500" />
      },
      {
        year: "2023",
        title: "10K+ Users",
        description: "Helped thousands of creators worldwide",
        icon: <GiSpinningSword className="text-2xl text-amber-500" />
      }
    ];
  
    return (
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Evolution</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to cutting-edge AI writing platform
            </p>
          </motion.div>
  
          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-200 to-pink-200 transform -translate-x-1/2"></div>
            
            {/* Milestones */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
                >
                  {/* Year */}
                  <div className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold py-1 px-3 rounded-full">
                      {milestone.year}
                    </span>
                  </div>
                  
                  {/* Dot */}
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-purple-300 flex items-center justify-center shadow-md z-10">
                    {milestone.icon}
                  </div>
                  
                  {/* Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* Team */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Minds</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Maya Chen",
                  role: "AI Linguist",
                  bio: "PhD in Computational Linguistics from Stanford",
                  avatar: "bg-gradient-to-br from-purple-500 to-pink-500"
                },
                {
                  name: "James Rodriguez",
                  role: "Creative Director",
                  bio: "Former editor at Penguin Random House",
                  avatar: "bg-gradient-to-br from-blue-500 to-cyan-400"
                },
                {
                  name: "Sarah Johnson",
                  role: "Tech Lead",
                  bio: "Built NLP systems at Google AI",
                  avatar: "bg-gradient-to-br from-amber-500 to-red-500"
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className={`h-40 ${member.avatar} flex items-center justify-center`}>
                    <div className="text-white text-5xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                    <p className="text-purple-500 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default About;