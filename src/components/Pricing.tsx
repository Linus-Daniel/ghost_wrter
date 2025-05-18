"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaRobot, FaCheck, FaRegLightbulb, FaPercentage } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";

// Define the type for a plan
type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  recommendedFor: string[];
  color: string;
  popular?: boolean;
};

const PricingSection = () => {
  const [planType, setPlanType] = useState<"monthly" | "yearly">("monthly");
  const [aiRecommendation, setAiRecommendation] = useState<Plan | null>(null);

  const plans: Plan[] = [
    {
      name: "Starter",
      monthly: 49,
      yearly: 39,
      description: "Perfect for small projects",
      features: ["10k words/month", "3 AI genres", "Basic editing", "Email support"],
      recommendedFor: ["Bloggers", "Students"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Professional",
      monthly: 99,
      yearly: 79,
      description: "For growing content needs",
      features: ["50k words/month", "All genres", "Priority editing", "Chat support", "SEO tools"],
      recommendedFor: ["Authors", "Marketers"],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      monthly: 199,
      yearly: 159,
      description: "Unlimited AI writing",
      features: ["Unlimited words", "All genres+", "Dedicated editor", "24/7 support", "API access"],
      recommendedFor: ["Teams", "Publishers"],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const getAiRecommendation = () => {
    // Simulate AI thinking
    setTimeout(() => {
      const rec = plans[Math.floor(Math.random() * plans.length)];
      setAiRecommendation(rec);
    }, 1500);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm">
            <GiPayMoney className="text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-600">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Writing Ally</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible plans for every creator. Save 20% with yearly billing.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setPlanType("monthly")}
              className={`px-6 py-2 rounded-lg text-sm font-medium ${planType === "monthly" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "text-gray-700"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlanType("yearly")}
              className={`px-6 py-2 rounded-lg text-sm font-medium ${planType === "yearly" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "text-gray-700"}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* AI Recommendation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                <FaRobot className="text-purple-500 mr-2" />
                AI Plan Recommender
              </h3>
              <p className="text-gray-600">
                Not sure which plan fits? Our AI will analyze your needs.
              </p>
            </div>
            <div className="flex space-x-4">
              {!aiRecommendation ? (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={getAiRecommendation}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                >
                  <FaRegLightbulb className="mr-2" /> Get Recommendation
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-lg p-4 shadow-md border border-purple-100"
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${aiRecommendation.color} flex items-center justify-center text-white mr-3`}>
                      <FaCheck />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{aiRecommendation.name}</h4>
                      <p className="text-sm text-gray-600">Recommended for you</p>
                    </div>
                  </div>
                </motion.div>
              )}
              <button 
                onClick={() => setAiRecommendation(null)}
                className="text-purple-600 hover:text-purple-800"
              >
                Reset
              </button>
            </div>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border ${plan.popular ? "border-purple-300" : "border-gray-100"} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${planType === "monthly" ? plan.monthly : plan.yearly}
                  </span>
                  <span className="text-gray-500">/{planType === "monthly" ? "mo" : "yr"}</span>
                  {planType === "yearly" && (
                    <span className="ml-2 px-2 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium">
                      <FaPercentage className="inline mr-1" /> 20% OFF
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.popular 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                      : "border border-purple-200 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;