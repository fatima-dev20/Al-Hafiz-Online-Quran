import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    img: "/homehero1.jpg",
    title: "Learn Anytime, Anywhere",
    subtitle: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    desc: "Flexible timings for kids and adults—join from any device.",
    btn1: { text: "Explore Our Courses", link: "/services" },
    btn2: { text: "Free Trial Class", link: "/free-trial-class" },
  },
  {
    img: "/homehero2.jpg",
    title: "Online Noorani Qaida Course",
    subtitle: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    desc: "Start from the Arabic alphabet and master makharij with certified tutors.",
    btn1: { text: "Explore Our Courses", link: "/services" },
    btn2: { text: "Free Trial Class", link: "/free-trial-class" },
  },
  {
    img: "/homehero3.jpg",
    title: "Interactive Quran Classes",
    subtitle: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    desc: "Live one-on-one sessions, feedback, and personalized lesson plans.",
    btn1: { text: "Explore Our Courses", link: "/services" },
    btn2: { text: "Free Trial Class", link: "/free-trial-class" },
  },
];

const HomeHeroSection = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="md:h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full md:h-screen py-28">

              {/* Background */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-screen  object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-[#0a5c3a]/60"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-2.5">

                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-4xl text-center"
                >

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                    }}
                    className="flex items-center justify-center mb-8"
                  >
                    <div className="hidden md:block w-20 h-px bg-[#c9a050] mr-4"></div>

                    <p className="text-[#c9a050] text-xl md:text-2xl font-semibold">
                      {slide.subtitle}
                    </p>

                    <div className="hidden md:block w-20 h-px bg-[#c9a050] ml-4"></div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4,
                    }}
                    className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
                  >
                    {slide.desc}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.6,
                    }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Link to={slide.btn1.link}>
                      <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#0a5c3a] hover:bg-[#086848] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                        {slide.btn1.text}
                      </button>
                    </Link>

                    <Link to={slide.btn2.link}>
                      <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg border-2 border-[#c9a050] text-[#c9a050] hover:bg-[#c9a050] hover:text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                        {slide.btn2.text}
                      </button>
                    </Link>
                  </motion.div>

                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeHeroSection;