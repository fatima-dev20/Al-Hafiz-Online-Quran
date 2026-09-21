import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaMosque, FaQuran, FaGlobe, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const QuranTranslation = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] ">
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center text-center overflow-hidden px-6 lg:px-20">
        <div 
          className="absolute inset-0 transition-opacity duration-700 opacity-100"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2021/03/22/14/46/quran-6114872_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 px-6 max-w-4xl">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-[#c9a050]/50 bg-[#c9a050]/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-[#c9a050] rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-[#c9a050] uppercase tracking-wider">
              Quran Translation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#0E7C5A] mb-6" data-aos="zoom-in">
            Qur'an Interpretation & Translation
          </h1>
          
          <p className="text-xl text-gray-200 mb-8" data-aos="fade-up">
            Discover the true essence of the Qur'an through accurate translations, scholarly interpretations, and beautiful recitations
          </p>
          
          <div className="flex flex-row lg:flex-wrap justify-center gap-2" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact">
              <button className=" px-4 lg:px-8 py-2.5 lg:py-3.5 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-[#0E7C5A] hover:bg-[#c9a050] hover:scale-105 cursor-pointer">
                Enroll Now
              </button>
            </Link>
            <Link to="/services">
              <button className="px-4 lg:px-8 py-2.5 lg:py-3.5 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-[#c9a050] hover:bg-[#0E7C5A] hover:scale-105 cursor-pointer">
                Explore Qur'an Online
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 px-6 bg-[#F9F9F9]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0E7C5A] mb-3">
            Qur'an Interpretation & Translation
          </h2>
          <div className="w-24 h-1 bg-[#c9a050] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Discover the true essence of the Qur'an through accurate translations, scholarly interpretations, 
            and beautiful recitations — all designed to help you understand and connect with Allah's words deeply.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Card 1 - Translation & Meaning */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border-t-4 border-[#0E7C5A] group hover:-translate-y-2">
            <img 
              alt="Translation & Meaning" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-700" 
              src="https://img.freepik.com/premium-photo/midsection-man-reading-spiritual-book_1048944-9083481.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaBookOpen className="text-3xl text-[#c9a050]" />
                <h3 className="text-xl font-semibold text-[#0E7C5A]">
                  Translation & Meaning
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Read authentic translations of the Holy Qur'an in multiple languages to understand the divine message clearly.
              </p>
            </div>
          </div>

          {/* Card 2 - Tafsir */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border-t-4 border-[#0E7C5A] group hover:-translate-y-2">
            <img 
              alt="Tafsir (Interpretation)" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-700" 
              src="https://pictures.abebooks.com/isbn/9783821702339-us.jpg"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaMosque className="text-3xl text-[#c9a050]" />
                <h3 className="text-xl font-semibold text-[#0E7C5A]">
                  Tafsir (Interpretation)
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Explore classical and modern Tafsir explaining the context, wisdom, and depth of each verse of the Qur'an.
              </p>
            </div>
          </div>

          {/* Card 3 - Transliteration & Recitation */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border-t-4 border-[#0E7C5A] group hover:-translate-y-2">
            <img 
              alt="Transliteration & Recitation" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-700" 
              src="https://img.freepik.com/free-photo/close-up-islamic-new-year-with-quran-book_23-2148611710.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaQuran className="text-3xl text-[#c9a050]" />
                <h3 className="text-xl font-semibold text-[#0E7C5A]">
                  Transliteration & Recitation
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Follow transliteration to improve your pronunciation and listen to recitations by renowned Qaris.
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="inline-block bg-[#0E7C5A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c9a050] transition duration-300">
              Explore Qur'an Online
            </button>
          </Link>
        </div>
      </section>

      {/* WHY LEARN QURAN TRANSLATION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0E7C5A] text-center mb-12">
            Why Learn <span className="text-[#c9a050]">Quran Translation?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-[#F9F9F9] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckCircle className="text-[#0E7C5A] text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-[#0E7C5A]">Understand the Message</h4>
                <p className="text-gray-600 text-sm">Connect with Allah's words and understand their true meaning and purpose.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#F9F9F9] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckCircle className="text-[#0E7C5A] text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-[#0E7C5A]">Strengthen Your Faith</h4>
                <p className="text-gray-600 text-sm">Deepen your connection with Allah through understanding and reflection.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#F9F9F9] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckCircle className="text-[#0E7C5A] text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-[#0E7C5A]">Apply to Daily Life</h4>
                <p className="text-gray-600 text-sm">Learn how Quranic teachings apply to modern challenges and situations.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#F9F9F9] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckCircle className="text-[#0E7C5A] text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-[#0E7C5A]">Share with Others</h4>
                <p className="text-gray-600 text-sm">Confidently share the message of the Quran with family and friends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default QuranTranslation;