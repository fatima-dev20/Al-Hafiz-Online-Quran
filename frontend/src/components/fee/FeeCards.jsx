import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

const FeeCards = () => {
  const [billing, setBilling] = useState("monthly");
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      title: "Basic",
      monthly: 30,
      yearly: 300,
      popular: false,
      features: [
        "Noorani Qaida Course",
        "2 Live Classes / Week",
        "30 Minutes Per Class",
        "Qualified Quran Teacher",
        "WhatsApp Support",
      ],
    },
    {
      id: 2,
      title: "Standard",
      monthly: 50,
      yearly: 500,
      popular: true,
      features: [
        "Everything in Basic",
        "4 Live Classes / Week",
        "45 Minutes Per Class",
        "One-to-One Classes",
        "Monthly Progress Report",
      ],
    },
    {
      id: 3,
      title: "Premium",
      monthly: 70,
      yearly: 700,
      popular: false,
      features: [
        "Everything in Standard",
        "Daily Live Classes",
        "Hifz & Tajweed",
        "Priority Teacher Support",
        "Flexible Schedule",
      ],
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-gradient-to-br from-[#f8f6f0] via-white to-[#eef7f2]">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-block px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold uppercase tracking-[2px] text-sm mb-5">
            Pricing Plans
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#0a5c3a]">
            Choose Your
            <span className="text-[#c9a050]"> Plan</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-8">
            Affordable Quran learning plans designed for students of all ages.
            Select the plan that best fits your learning goals.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-14">
          <div className="bg-white shadow-lg rounded-full p-1 flex">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${billing === "monthly"
                  ? "bg-[#0a5c3a] text-white"
                  : "text-gray-600"
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${billing === "yearly"
                  ? "bg-[#0a5c3a] text-white"
                  : "text-gray-600"
                }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {plans.map((plan) => (

            <motion.div
              key={plan.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${plan.popular
                  ? "bg-[#0a5c3a] text-white shadow-2xl lg:-translate-y-4"
                  : "bg-white shadow-xl hover:shadow-2xl"
                }`}
            >

              {/* Popular */}
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-[#c9a050] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                  <AiOutlineStar />
                  Most Popular
                </div>
              )}

              {/* Top */}
              <div className="p-8 text-center border-b border-white/10">

                <h3
                  className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-[#0a5c3a]"
                    }`}
                >
                  {plan.title}
                </h3>

                <div className="mt-6">
                  <span className="text-5xl font-bold text-[#c9a050]">
                    ${billing === "monthly" ? plan.monthly : plan.yearly}
                  </span>

                  <span
                    className={`text-lg ${plan.popular ? "text-gray-300" : "text-gray-500"
                      }`}
                  >
                    /{billing}
                  </span>
                </div>

                <p
                  className={`mt-4 ${plan.popular ? "text-gray-300" : "text-gray-500"
                    }`}
                >
                  Perfect for Quran learners
                </p>

              </div>

              {/* Features */}
              <div className="p-8">

                <ul className="space-y-5">

                  {plan.features.map((feature, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${plan.popular
                            ? "bg-[#c9a050]"
                            : "bg-[#0a5c3a]/10"
                          }`}
                      >
                        <BsCheckLg
                          className={`text-sm ${plan.popular
                              ? "text-white"
                              : "text-[#0a5c3a]"
                            }`}
                        />
                      </div>

                      <span
                        className={`${plan.popular
                            ? "text-gray-200"
                            : "text-gray-600"
                          }`}
                      >
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>

                {/* Button with Link */}
                <button
                  onClick={() => {
                    const selectedPrice = billing === "monthly" ? plan.monthly : plan.yearly;
                    navigate(`/contact?plan=${plan.title}&price=${selectedPrice}&billing=${billing}`);
                  }}
                  className={`w-full mt-10 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${plan.popular
                      ? "bg-[#c9a050] hover:bg-[#b88f35] text-white"
                      : "bg-[#0a5c3a] hover:bg-[#08462d] text-white"
                    }`}
                >
                  Choose Plan
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p
                  className={`text-center mt-4 text-sm ${plan.popular
                      ? "text-gray-300"
                      : "text-gray-500"
                    }`}
                >
                  No hidden charges • Cancel anytime
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FeeCards;