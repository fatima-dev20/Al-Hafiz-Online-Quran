import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaStar, FaUsers, FaClock, FaMoneyBillWave } from "react-icons/fa";

const FeeHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-10 lg:py-20 bg-gradient-to-br from-[#f8f6f0] via-white to-[#eef7f2] overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a050]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a5c3a]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden mt-10 shadow-2xl">
            <img
              src="/fee-img.jpg" 
              alt="Fee Structure"
              className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a5c3a]/30 to-transparent"></div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[200px] border-l-4 border-[#c9a050]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaUsers className="text-[#0a5c3a] text-xl" />
              </div>
              <div>
                <p className="text-[#0a5c3a] font-bold text-lg">10,000+</p>
                <p className="text-gray-500 text-xs">Happy Students</p>
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-[#c9a050]/30"></div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 w-max">
            <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
            Fee & Plans
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#0a5c3a] leading-tight">
            Quran Learning {" "}
            <span className="text-[#c9a050] relative">
              Fee Structure
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Enhance your Quran learning experience with expert instructors,
            flexible fee plans, and interactive online sessions. Whether you
            are starting or aiming to master your skills, our courses are
            designed for all levels.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-[#c9a050]/10">
              <FaStar className="text-[#c9a050]" />
              <span className="text-sm text-gray-600">Expert Teachers</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-[#c9a050]/10">
              <FaClock className="text-[#c9a050]" />
              <span className="text-sm text-gray-600">Flexible Timing</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-[#c9a050]/10">
              <FaMoneyBillWave className="text-[#c9a050]" />
              <span className="text-sm text-gray-600">Affordable Plans</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 bg-[#0a5c3a] hover:bg-[#c9a050] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => navigate("/courses")}
              className="inline-flex items-center gap-3 bg-transparent border-2 border-[#0a5c3a] text-[#0a5c3a] hover:bg-[#0a5c3a] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
            >
              View Courses
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeeHeroSection;