import React from "react";
import { Link } from "react-router-dom";
import {
  FaQuran,
  FaUserGraduate,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const QuranMemorization = () => {
  const features = [
    {
      icon: <FaUserGraduate />,
      title: "Qualified Teachers",
      text: "Learn from experienced Quran teachers with proper Tajweed guidance.",
    },
    {
      icon: <FaQuran />,
      title: "Personalized Learning",
      text: "Lessons are designed according to each student's level and progress.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Classes",
      text: "Choose convenient class timings from anywhere in the world.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Structured Program",
      text: "A clear memorization and revision system for steady progress.",
    },
  ];

  const requirements = [
    "Accurate Quran memorization",
    "Strong Tajweed and pronunciation",
    "Fluent and confident recitation",
  ];

  return (
    <div className="bg-[#f7faf8]">

      {/*  SECTION 1 - HERO  */}
      <section className="relative overflow-hidden bg-[#063d2b] py-24 md:py-32 px-6 lg:px-16">
        
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#c9a050]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0a7c59]/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto  grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block text-[#c9a050] text-sm font-bold uppercase tracking-[3px] mb-4"
            data-aos="zoom-in">
              Quran Memorization Program
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight"
            data-aos="fade-up">
              Quran Memorization
              <span className="block text-[#c9a050]">
                Ijazah Program
              </span>
            </h1>

            <p className="text-[#d8e9e2] text-lg leading-8 mt-6"
            data-aos="zoom-in">
              Memorize the Holy Quran with qualified teachers,
              personalized guidance, Tajweed excellence, and a
              structured learning system.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#c9a050] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#b89442] hover:-translate-y-1 transition-all"
            data-aos="fade-down">
              Start Free Trial
              <FaArrowRight />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-[#c9a050]/40 rounded-3xl" />

            <img
              src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=80"
              alt="Quran memorization"
              className="relative w-full h-[380px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>


      {/*  SECTION 2 - FEATURES  */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-[#c9a050] text-sm font-bold uppercase tracking-[3px]">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#075c40] mt-3">
              Learn Quran With
              <span className="text-[#c9a050]"> Confidence</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md border border-[#0a5c3a]/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0a5c3a]/10 text-[#0a5c3a] text-2xl group-hover:bg-[#c9a050] group-hover:text-white transition-all">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#075c40] mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mt-3">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/*  SECTION 3 - IJAZAH  */}
      <section className="py-20 px-6 bg-[#eef6f2]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

           {/* Requirements */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#0a5c3a]/10">

            <div className="w-14 h-14 rounded-2xl bg-[#0a5c3a] text-white flex items-center justify-center text-2xl mb-6">
              <FaCheckCircle />
            </div>

            <h2 className="text-3xl font-bold text-[#075c40] mb-7">
              Ijazah Requirements
            </h2>

            <div className="space-y-5">
              {requirements.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#c9a050]/15 text-[#c9a050] flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>

                  <p className="text-gray-600 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="bg-[#063d2b] rounded-3xl p-8 md:p-10 text-white shadow-xl">

            <FaQuran className="text-[#c9a050] text-5xl mb-6" />

            <h3 className="text-2xl font-bold text-[#c9a050] mb-5">
              Learning Goals
            </h3>

            <ul className="space-y-4 text-[#d8e9e2]">

              <li>• Achieve accurate Quran memorization.</li>
              <li>• Understand the general meanings of verses.</li>
              <li>• Improve Tajweed and recitation.</li>
              <li>• Build strong revision habits.</li>

            </ul>

          </div>

        </div>
      </section>


      {/*  SECTION 4 - CTA  */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-[#063d2b]">

          <div className="absolute top-0 right-0 w-72 h-72 bg-[#c9a050]/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 items-center">

            <div className="p-8 md:p-12">

              <span className="text-[#c9a050] font-bold uppercase tracking-[2px] text-sm">
                Hifz Quran Online
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Begin Your Quran
                <span className="text-[#c9a050]"> Memorization Journey</span>
              </h2>

              <p className="text-[#d8e9e2] leading-7 mt-5">
                Learn from home through interactive online sessions,
                personalized memorization plans and regular revision
                with qualified Quran teachers.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-7 bg-[#c9a050] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#b89442] transition-all"
              >
                Enroll Now
                <FaArrowRight />
              </Link>

            </div>

            <img
              src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80"
              alt="Quran learning"
              className="w-full h-[330px] object-cover"
            />

          </div>

        </div>

      </section>

    </div>
  );
};

export default QuranMemorization;