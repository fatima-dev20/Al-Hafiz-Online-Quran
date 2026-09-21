import React from "react";

const ToBeTeacherHeroSection = () => {
  const scrollToCards = () => {
    const section = document.getElementById("teacher-application-form");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative py-40 md:h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/teacher-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#c9a050]/35 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a050]/35 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center" data-aos="zoom-in">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/20 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/30 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
          Join Our Team
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-2 text-white/70">
          Become a <span className="text-[#c9a050]">Teacher</span>
        </h1>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-2 mt-2 mb-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c9a050] rounded-full"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c9a050] rounded-full"></div>
        </div>

        {/* Description */}
        <p className="mb-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join our platform to teach students worldwide, grow professionally, 
          and make a lasting impact.
        </p>

        {/* Apply Button */}
        <button
          onClick={scrollToCards}
          className="px-8 py-3.5 bg-[#c9a050] hover:bg-[#b8942e] text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          data-aos="fade-right"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default ToBeTeacherHeroSection;