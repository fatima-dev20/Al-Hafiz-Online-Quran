import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaGift,
  FaChalkboardTeacher,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";

const FreeTrialClass = () => {
  return (
    <section className="bg-gradient-to-b from-[#f8f6f0] via-white to-[#f8f6f0] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block px-5 py-2 rounded-full bg-[#c9a050]/15 text-[#c9a050] font-semibold text-sm mb-4">
            <FaGift className="inline mr-2" />
            Limited Time Offer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0a5c3a]">
            3-Day Free Trial
          </h1>

          <p className="mt-4 text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
            Experience our premium Quran teaching style with
            <span className="font-semibold text-[#c9a050]">
              {" "}zero obligation
            </span>
            . Enjoy three FREE one-on-one classes and discover why thousands
            of students trust Al Hafiz Online Quran Academy.
          </p>
        </div>

        {/* Quran Verse */}
        <div
          className="bg-[#0a5c3a] rounded-2xl shadow-xl p-8 md:p-10 text-center mb-12"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <h2 className="text-2xl md:text-3xl text-[#c9a050] mb-4 font-semibold">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            "And We have certainly made the Quran easy for remembrance,
            so is there anyone who will remember?"
          </p>

          <p className="text-[#c9a050] mt-4 font-semibold text-sm">
            Surah Al-Qamar (54:17)
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center overflow-hidden">

          {/* Left - Image + Features */}
          <div data-aos="fade-right" data-aos-duration="1000">

            <img
              src="/homehero2.jpg"
              alt="Free Trial"
              className="rounded-2xl shadow-xl w-full h-80 object-cover hover:scale-[1.02] transition-all duration-500"
            />

            <div className="flex flex-col gap-5 mt-8">

              {/* Feature 1 */}
              <div
                className="flex gap-4 bg-white rounded-xl shadow-md p-5 border-l-4 border-[#c9a050] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-12 h-12 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center flex-shrink-0">
                  <FaChalkboardTeacher className="text-[#0a5c3a] text-xl" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0a5c3a]">
                    Qualified Teachers
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Learn from highly experienced male and female Quran tutors.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className="flex gap-4 bg-white rounded-xl shadow-md p-5 border-l-4 border-[#c9a050] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-12 h-12 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-[#0a5c3a] text-xl" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0a5c3a]">
                    Flexible Timing
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Morning, Evening or Weekend classes according to your schedule.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div
                className="flex gap-4 bg-white rounded-xl shadow-md p-5 border-l-4 border-[#c9a050] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-[#0a5c3a] text-xl" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0a5c3a]">
                    No Commitment
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Continue only if you're completely satisfied with the classes.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right - Contact Card */}
          <div
            className="bg-white rounded-3xl shadow-2xl border-t-4 border-[#c9a050] p-8 md:p-10 hover:shadow-3xl transition-all duration-500"
            data-aos="fade-left"
            data-aos-duration="1000"
          >

            <span className="text-[#c9a050] font-semibold uppercase tracking-widest text-sm">
              Free Registration
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0a5c3a] mt-3 mb-5">
              Book Your Free Trial Today
            </h2>

            <p className="text-gray-600 leading-7 mb-8 text-sm md:text-base">
              Our experienced Quran teachers will assess your level,
              discuss your learning goals and prepare a personalized
              study plan—all completely FREE.
            </p>

            <div className="space-y-4">

              {/* Point 1 */}
              <div className="flex gap-3 items-start">
                <FaCheckCircle className="text-[#c9a050] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  No registration fee.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex gap-3 items-start">
                <FaCheckCircle className="text-[#c9a050] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Three FREE live online classes.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex gap-3 items-start">
                <FaCheckCircle className="text-[#c9a050] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Male & Female teachers available.
                </p>
              </div>

              {/* Point 4 */}
              <div className="flex gap-3 items-start">
                <FaCheckCircle className="text-[#c9a050] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Kids & Adults both can join.
                </p>
              </div>

              {/* Point 5 */}
              <div className="flex gap-3 items-start">
                <FaCheckCircle className="text-[#c9a050] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Flexible schedule according to your time zone.
                </p>
              </div>

              {/* Point 6 */}
              <div className="flex gap-3 items-start">
                <FaCheckCircle className="text-[#c9a050] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Interactive learning with modern teaching methods.
                </p>
              </div>

              {/* Point 7 */}
              <div className="flex gap-3 items-start">
                <FaCheckCircle className="text-[#c9a050] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Free learning materials and resources provided.
                </p>
              </div>

            </div>

            {/* Book Free Trial */}
            <Link to="/contact" className="block">
              <button className="mt-8 w-full bg-[#0a5c3a] hover:bg-[#08472f] text-white py-3.5 rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
                Book Free Trial

                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            {/* Back to Home */}
            <Link to="/" className="block">
              <button className="mt-3 w-full border-2 border-[#c9a050] text-[#0a5c3a] hover:bg-[#c9a050] hover:text-white py-3.5 rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300">
                <FaHome />
                Back to Home
              </button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeTrialClass;