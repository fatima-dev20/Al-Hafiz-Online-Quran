import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUser, FaUserTie, FaPhoneAlt, FaEnvelope, FaGlobe, FaClock, FaBookOpen, FaComment, FaArrowRight, FaShieldAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const ContactForm = () => {
  const ref = useRef();
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan");
  const selectedPrice = searchParams.get("price");
  const selectedBilling = searchParams.get("billing");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await emailjs.sendForm(
        "service_q3qzwxa",
        "template_wv111va",
        ref.current,
        {
          publicKey: "CRy6jpC38o37aihaF",
        }
      );

      console.log("EmailJS success:", response);

      toast.success("Email sent successfully!");
      ref.current.reset();
    } catch (err) {
      console.error("EmailJS ERROR:", err);
      console.error("Status:", err?.status);
      console.error("Text:", err?.text);

      toast.error(err?.text || "Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section>
      <div className="container mx-auto px-6 lg:px-20 pb-10">
        <div className="max-w-3xl mx-auto">

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#c9a050]/10" data-aos="fade-up">


            {selectedPlan && (
              <div className="bg-[#0a5c3a]/5 border-2 border-[#c9a050] rounded-2xl p-5 mb-6">
                <p className="text-sm text-gray-600 mb-1">You selected:</p>
                <h3 className="text-xl font-bold text-[#0a5c3a] mb-2">
                  {selectedPlan} Plan
                </h3>
                <p className="text-2xl font-bold text-[#c9a050]">
                  ${selectedPrice}
                  <span className="text-sm text-gray-500 font-normal">
                    /{selectedBilling}
                  </span>
                </p>
              </div>
            )}


            {/* Heading Inside Card */}
            <div className=" mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a5c3a]">
                Send us <span className="text-[#c9a050]">Your Details</span>
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl ">
                Fill in the details below and our team will contact you shortly
                to begin your Quran learning journey.
              </p>
            </div>

            <form ref={ref} onSubmit={handleSubmit} className="space-y-5">


              {selectedPlan && (
                <>
                  <input type="hidden" name="plan" value={selectedPlan} />
                  <input type="hidden" name="price" value={selectedPrice} />
                  <input type="hidden" name="billing" value={selectedBilling} />
                </>
              )}



              {/* Row 1 - Name & Father Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaUserTie className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="text"
                    name="father_name"
                    required
                    placeholder="Father's Name"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2 - Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    placeholder="Phone Number"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Email Address"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3 - Country & Preferred Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="text"
                    name="user_country"
                    required
                    placeholder="Country"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="time"
                    name="preferred_time"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 4 - Course Selection */}
              <div className="relative">
                <FaBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                <select
                  name="selected_course"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="">Select a course</option>
                  <option value="Noorani Qaida">Noorani Qaida</option>
                  <option value="Quran Reading">Quran Reading</option>
                  <option value="Tajweed Course">Tajweed Course</option>
                  <option value="Quran Memorization (Hifz)">Quran Memorization (Hifz)</option>
                  <option value="Quran Tafsir">Quran Tafsir</option>
                  <option value="Arabic Language">Arabic Language</option>
                </select>
              </div>

              {/* Row 5 - Message */}
              <div className="relative">
                <FaComment className="absolute left-4 top-4 text-[#c9a050] text-sm z-10" />
                <textarea
                  name="user_message"
                  rows="4"
                  placeholder="Tell us about your Quran learning goals..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-[#0a5c3a] hover:bg-[#c9a050] disabled:bg-gray-400 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-3 group"
              >
                {loading ? "Sending Details..." : "Start Learning Now"}
                {!loading && <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />}
              </button>

              {/* Security Note */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-2">
                <FaShieldAlt className="text-[#c9a050]" />
                <span>Your information is 100% secure and confidential</span>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;