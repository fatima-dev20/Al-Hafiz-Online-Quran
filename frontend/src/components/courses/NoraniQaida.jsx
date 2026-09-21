import React from "react";
import { Link } from "react-router-dom";

const NoraniQaida = () => {
  const topics = [
    {
      title: "Arabic Alphabet",
      text: "Learn the Arabic letters with correct shapes, sounds, and pronunciation from the beginning.",
      icon: "ا",
    },
    {
      title: "Harakat & Signs",
      text: "Understand Fatha, Kasra, Damma, Sukoon and other basic signs used in Quran reading.",
      icon: "َ",
    },
    {
      title: "Makharij",
      text: "Learn how to pronounce Arabic letters correctly from their proper points of articulation.",
      icon: "ع",
    },
    {
      title: "Quran Reading",
      text: "Build a strong foundation for reading Quran fluently with accurate pronunciation.",
      icon: "📖",
    },
  ];

  return (
    <div className=" bg-[#f8faf9]  overflow-hidden">

      {/*  HERO SECTION  */}
      <section className="relative py-24  md:h-screen  px-6 flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1800&q=85"
          alt="Quran learning"
          className="absolute inset-0 w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

        <div
          className="relative z-10 max-w-6xl mx-auto  md:h-screen md:pt-28 pb-0 w-full"
         
        >
          <div className="max-w-2xl ">

            <span className="inline-block bg-[#c9a050] text-white px-5 py-2 rounded-full text-sm font-semibold mb-"
             data-aos="zoom-in">
              Quran Reading Foundation
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2"  data-aos="zoom-in">
              Noorani Qaida
              <span className="block text-[#d9b477]">
                Learn Quran from the Beginning
              </span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8"
             data-aos="zoom-in">
              Build a strong foundation in Quran reading by learning Arabic
              letters, pronunciation, Harakat, and essential Tajweed rules
              step by step.
            </p>

            <div className="flex flex-row gap-4 ">
              <Link to="/contact">
                <button className="bg-[#007A55] hover:bg-[#c9a050] text-white px-5 lg:px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                 data-aos="zoom-in">
                  Start Learning
                </button>
              </Link>

              <a href="#course">
                <button className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#007A55] transition-all duration-300" 
                data-aos="zoom-in">
                  Explore Course
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/*  INTRO SECTION  */}
      <section id="course" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <span className="text-[#c9a050] font-semibold uppercase tracking-wider">
              Start With The Basics
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#007A55] mt-3 mb-6">
              What is Noorani Qaida?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Noorani Qaida is a beginner-friendly guide designed to teach
              students the fundamentals of Arabic reading and Quran
              recitation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Students gradually learn letters, joining letters, Harakat,
              Sukoon, Tanween and basic pronunciation rules. This creates a
              solid foundation before moving toward fluent Quran reading.
            </p>

            <div className="border-l-4 border-[#c9a050] bg-white shadow-sm p-5 rounded-r-xl">
              <p className="text-gray-600 italic">
                "A strong beginning makes Quran learning easier and more
                confident."
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <img
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1000&q=85"
              alt="Student learning Quran"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-[#007A55] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold">4+</p>
              <p className="text-sm">Core Skills</p>
            </div>
          </div>

        </div>
      </section>


      {/*  TOPICS SECTION  */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div
            className="text-center max-w-2xl mx-auto mb-14"
            data-aos="fade-up"
          >
            <span className="text-[#c9a050] font-semibold">
              COURSE CONTENT
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#007A55] mt-2 mb-4">
              What You Will Learn
            </h2>

            <p className="text-gray-600">
              Our structured lessons help beginners develop the essential
              skills required for confident Quran reading.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {topics.map((topic, index) => (
              <div
                key={topic.title}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group bg-[#f8faf9] border border-gray-200 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#007A55] text-white text-2xl font-bold mb-6 group-hover:bg-[#c9a050] transition-colors duration-300">
                  {topic.icon}
                </div>

                <h3 className="text-xl font-bold text-[#007A55] mb-3">
                  {topic.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default NoraniQaida;