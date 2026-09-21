import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const NamazDuaKalmaHero = () => {
  return (
    <section className="relative py-32 md:h-screen flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 transition-opacity duration-700 opacity-100"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/036/447/375/small_2x/ai-generated-muslim-man-praying-at-a-mosque-with-sunlight-effect-worshiping-god-generative-ai-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 px-6 max-w-4xl">
        <div className="inline-flex items-center px-5 py-2 rounded-full border border-[#AF864C]/50 bg-[#AF864C]/20 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 bg-[#AF864C] rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm font-semibold text-[#AF864C] uppercase tracking-wider">
            Worship & Faith
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-[#009966] mb-6" data-aos="zoom-in">
          Islamic Spiritual Guide
        </h1>
        
        <p className="text-xl text-gray-200 mb-8" data-aos="fade-up">
          Master Namaz, Understand Kalmas, and Connect with Allah through Dua
        </p>
        
        <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <Link to="/contact">
            <button className="px-8 py-2 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-[#009966] hover:bg-[#AF864C] hover:scale-105 cursor-pointer">
              Enroll Now
            </button>
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default NamazDuaKalmaHero;