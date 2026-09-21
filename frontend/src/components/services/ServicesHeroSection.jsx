import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesHeroSection = () => {
  const scrollToServices = () => {
    const section = document.getElementById("services-cards");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative  flex items-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/services-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-3 lg:px-20 py-32">
        <div className="max-w-4xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight"
          >
            Learn Quran With{" "}
            <span className="text-[#2d7858]">
              Expert Guidance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-3 text-white/85 text-base md:text-lg leading-8 max-w-2xl mx-auto"
          >
            Explore our comprehensive Quran and Islamic learning
            services designed for children, adults, beginners, and
            advanced learners. Learn from qualified teachers through
            personalized online classes.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="flex flex-row justify-center items-center gap-2 mt-6"
          >
            {/* Explore Services */}
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center justify-center gap-2 px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#2d7858] text-white font-semibold shadow-lg hover:bg-[#b49762] hover:-translate-y-1 transition-all duration-300"
            >
              Explore Services

              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Start Learning */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white font-semibold hover:bg-white hover:text-[#0a5c3a] hover:-translate-y-1 transition-all duration-300"
            >
              Start Learning

              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a5c3a]/70 to-transparent pointer-events-none"></div>

    </section>
  );
};

export default ServicesHeroSection;