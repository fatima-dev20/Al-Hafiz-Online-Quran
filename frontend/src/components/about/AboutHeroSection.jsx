import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-36 md:h-screen px-5 md:px-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/about-hero-section-img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

        {/* Title */}
        <h1
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-4xl  lg:text-5xl font-bold font-serif text-white leading-tight"
        >
          About <span className="text-[#c9a050]">Us</span>
        </h1>

        {/* Decorative Line */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="700"
          className="flex items-center gap-3 mt-3 mb-4"
        >
          <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#c9a050]"></div>

          <div className="w-3 h-3 rounded-full bg-[#c9a050]"></div>

          <div className="w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#c9a050]"></div>
        </div>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="max-w-2xl text-white/90 text-base md:text-lg leading-8 mb-4"
        >
          We are committed to providing authentic Quran education with qualified
          teachers, flexible schedules, and a caring Islamic learning
          environment for students around the world.
        </p>

        {/* Breadcrumb */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
        >
          <Link
            to="/"
            className="text-white hover:text-[#c9a050] transition duration-300"
          >
            Home
          </Link>

          <FaChevronRight className="text-xs text-[#c9a050]" />

          <span className="text-[#c9a050] font-semibold">
            About Us
          </span>
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;