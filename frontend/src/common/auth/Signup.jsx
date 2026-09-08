import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";
import { useSignUpMutation } from "../../app/api/userApi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdeta] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
  })

  const navigate = useNavigate();

  const [signUp, { isLoading, error }] = useSignUpMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;


    setFormdeta((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,

    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formdata.password !== formdata.confirmPassword) {
      return toast("Passwords do not match.", {
        type: "error"
      })

    }

    if (!formdata.isAgree) {
      return toast("Please accept the Terms and Privacy Policy.", {
        type: "error"
      })

    }

    try {


      await signUp(formdata).unwrap()
      toast("Account created successfully!", {
        type: "success"
      })

      navigate("/verify-otp",
         {
        state: {
          email: formdata?.email,
        },
        }
      );
    }catch (err) {
  console.log("SIGNUP ERROR:", err);

  toast(err?.data?.message || "Failed to create account.",
    { type: "error" }
  );
}

  }


  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4 py-7">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex relative bg-[#0a5c3a] items-center justify-center p-12 overflow-hidden">

          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-[#c9a050]/10" />

          <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-[#c9a050]/10" />

          <div className="relative z-10 text-center text-white">

            <img
              src="/logo.jpg"
              alt="Al Hafiz Online"
              className="w-[140px] h-24 rounded-2xl mx-auto mb-6 shadow-xl border-2 border-[#c9a050]"
            />

            <h1 className="text-3xl font-bold mb-3">
              Al Hafiz-Online
            </h1>

            <p className="text-[#f5d48a] font-medium mb-6">
              Learn Quran Online
            </p>

            <p className="text-white/70 leading-relaxed max-w-sm mx-auto">
              Start your Quran learning journey with qualified teachers
              and personalized online classes.
            </p>

            <div className="mt-8 h-px w-24 bg-[#c9a050] mx-auto" />

            <p className="mt-6 text-[#f5d48a] text-lg">
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </p>

            <p className="text-white/60 text-sm mt-2">
              "Read in the name of your Lord who created."
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 pt-6">

          {/* HEADING */}
          <div className="mb-4">

            <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider mb-1">
              Get Started
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a]">
              Create Your Account
            </h2>

            <p className="text-gray-500 mt-1">
              Join us and begin your Quran learning journey.
            </p>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-3">

            {/* NAME */}
            <div className="group relative text-gray-400 font-semibold">
              <FaUser className="absolute text-[14px] left-4 top-1/2 -translate-y-1/2  group-focus-within:text-[#c9a050] transition-colors" />

              <input
                type="text"
                name="name"
                required
                value={formdata.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-11 pr-4 py-2.5 text-gray-500  rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
              />
            </div>

            {/* EMAIL */}
            <div className="group relative text-gray-400 font-semibold">
              <FaEnvelope className="absolute text-[14px]  left-4 top-1/2 -translate-y-1/2  group-focus-within:text-[#c9a050] transition-colors" />

              <input
                type="email"
                name="email"
                required
                value={formdata.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-11 pr-4 py-2.5 text-gray-500  rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* PASSWORD */}
              <div className="group relative text-gray-400 font-semibold">
                <FaLock className="absolute text-[14px]  left-4 top-1/2 -translate-y-1/2  group-focus-within:text-[#c9a050] transition-colors"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  value={formdata.password}
                  onChange={handleChange}
                  minLength={8}
                  className="w-full pl-11 pr-12 py-2.5 text-gray-500  rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a5c3a]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="group relative text-gray-400 font-semibold">
                <FaLock className="absolute text-[14px]  left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#c9a050] transition-colors"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formdata.confirmPassword}
                  onChange={handleChange}
                  minLength={8}
                  placeholder="Confirm Password"
                  className="w-full px-10 py-2.5 text-gray-500  rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />
              </div>

            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2 pt-1">

              <input
                type="checkbox"
                name="isAgree"
                checked={formdata.isAgree}
                onChange={handleChange}
                className="w-4 h-4 mt-1 accent-[#0a5c3a]"
              />

              <p className="text-sm text-gray-500">
                I agree to the{" "}

                <span className="text-[#0a5c3a] font-semibold">
                  Terms & Conditions
                </span>{" "}
                and Privacy Policy.
              </p>

            </div>

            {/* SIGNUP BUTTON */}
            <button
              disabled={isLoading}
              type="submit"
              className="w-full cursor-pointer py-2.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              {isLoading ? "Creating Account..." : "Create Account"}

            </button>

            {/* OR */}
            <div className="relative flex items-center ">

              <div className="flex-1 border-t border-gray-200" />

              <span className="px-4 text-sm text-gray-400 bg-white">
                OR
              </span>

              <div className="flex-1 border-t border-gray-200" />

            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-[#c9a050] hover:shadow-md text-gray-700 font-medium py-2 rounded-xl transition-all duration-300 group"
            >

              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />

                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />

                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />

                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>

              <span className="group-hover:text-[#0a5c3a] transition-colors">
                Continue with Google
              </span>

            </button>

          </form>

          {/* LOGIN */}
          <div className="text-center mt-3">

            <p className="text-gray-500 text-sm">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-[#0a5c3a] font-semibold hover:text-[#c9a050]"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;