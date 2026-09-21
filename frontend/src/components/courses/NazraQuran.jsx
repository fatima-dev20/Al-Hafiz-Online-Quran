import React from "react";
import { Link } from "react-router-dom";

const NazraQuran = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative py-32 bg-cover bg-center md:h-screen"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/koran-holy-book-muslims-public-item-all-muslims-table_44074-502.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 mb-5 rounded-full bg-[#c9a050]/20 border border-[#c9a050]/50 text-[#c9a050] text-sm font-semibold"
          data-aos="fade-up">
            QURAN LEARNING
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-5"
          data-aos="zoom-in">
            Learn Nazra Quran<span className="text-[#c9a050]">
            <br />
            with Tajweed
            </span>
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed mb-8"
          data-aos="fade-up">
            Learn to read the Holy Quran correctly and beautifully with
            experienced tutors and step-by-step guidance.
          </p>

          <Link to="/contact">
            <button className="bg-[#c9a050] hover:bg-[#b8942e] text-white px-8 py-3 rounded-full font-semibold transition hover:scale-105"
            data-aos="zoom-in">
              Start Free Trial
            </button>
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 space-y-8">

        {/* INTRODUCTION */}
        <section className="bg-white p-7 rounded-2xl shadow-md border border-[#c9a050]/20">
          <h2 className="text-3xl font-bold text-[#0a5c3a] mb-4">
            Introduction
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Welcome to our Nazra Quran course. This program is designed for
            beginners who want to learn Quran reading with correct
            pronunciation and fluency. Students learn through regular
            practice, audio guidance, and personalized teacher feedback.
          </p>
        </section>

        {/* WHAT YOU LEARN */}
        <section className="bg-white p-7 rounded-2xl shadow-md border border-[#c9a050]/20">
          <h2 className="text-3xl font-bold text-[#0a5c3a] mb-4">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-[#c9a050]">
                Arabic Letters
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Learn to recognize and pronounce Arabic letters correctly.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-[#c9a050]">
                Tajweed Rules
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Understand basic Tajweed rules for accurate recitation.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-[#c9a050]">
                Quran Reading
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Build confidence and fluency while reading the Quran.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-[#c9a050]">
                Practice
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Improve your recitation through guided practice.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white p-7 rounded-2xl shadow-md border border-[#c9a050]/20">
          <h2 className="text-3xl font-bold text-[#0a5c3a] mb-4">
            Benefits of Nazra Quran
          </h2>

          <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
            <li className="p-3 bg-gray-50 rounded-lg">
              ✓ Build confidence in Quran recitation
            </li>

            <li className="p-3 bg-gray-50 rounded-lg">
              ✓ Learn with personalized teacher guidance
            </li>

            <li className="p-3 bg-gray-50 rounded-lg">
              ✓ Improve pronunciation and fluency
            </li>

            <li className="p-3 bg-gray-50 rounded-lg">
              ✓ Progress from basic reading to fluent recitation
            </li>
          </ul>
        </section>

        {/* COURSE MATERIAL */}
        <section className="bg-white p-7 rounded-2xl shadow-md border border-[#c9a050]/20">
          <h2 className="text-3xl font-bold text-[#0a5c3a] mb-4">
            Course Material
          </h2>

          <p className="text-gray-600 mb-5">
            Students receive simple and useful learning materials to support
            their Quran reading practice at home.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-5 bg-[#0a5c3a]/5 rounded-xl">
              <h3 className="font-bold text-[#0a5c3a]">
                Lesson PDFs
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Visual learning guides
              </p>
            </div>

            <div className="text-center p-5 bg-[#0a5c3a]/5 rounded-xl">
              <h3 className="font-bold text-[#0a5c3a]">
                Audio
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Pronunciation practice
              </p>
            </div>

            <div className="text-center p-5 bg-[#0a5c3a]/5 rounded-xl">
              <h3 className="font-bold text-[#0a5c3a]">
                Videos
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Easy demonstrations
              </p>
            </div>

            <div className="text-center p-5 bg-[#0a5c3a]/5 rounded-xl">
              <h3 className="font-bold text-[#0a5c3a]">
                Practice
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Worksheets and quizzes
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/contact">
              <button className="bg-[#c9a050] hover:bg-[#0a5c3a] text-white px-8 py-3 rounded-full font-semibold transition">
                Start Learning Today
              </button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default NazraQuran;