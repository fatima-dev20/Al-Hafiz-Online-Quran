import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa6";
import { useLogInMutation } from "../../app/api/userApi";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdeta] = useState({
    email: "",
    password: "",
    Remember: false
  })


  const navigate = useNavigate();

  const [signIn, { isLoading, error }] = useLogInMutation();



  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setFormdeta((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn(formdata).unwrap();
      toast("login successfully!", { type: "success" })
      if (result.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (error) {
      toast(
        error?.data?.message || "user not login", { type: "error" })

    }




  }
  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4 py-10">

      <div className="w-full  max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex relative bg-[#0a5c3a] items-center justify-center p-12 overflow-hidden">

          {/* Decorative Circles */}
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
              Continue your Quran learning journey with qualified teachers
              and personalized online classes.
            </p>

            <div className="mt-8 h-px w-24 bg-[#c9a050] mx-auto" />

            <p className="mt-6 text-[#f5d48a] text-lg">
              فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
            </p>

            <p className="text-white/60 text-sm mt-2">
              "Indeed, with hardship comes ease."
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8  ">

          {/* Heading */}
          <div className="mb-4">

            <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider mb-1">
              Welcome Back
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a]">
              Login to Your Account
            </h2>

            <p className="text-gray-500 mt-1">
              Continue your Quran learning journey.
            </p>

          </div>

          {/* FORM */}
          <form className="space-y-3 " onSubmit={handleSubmit}>

            {/* Email */}
            <div>


              <div className="group relative text-gray-400 font-semibold">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2   group-focus-within:text-[#c9a050] transition-colors" />

                <input
                  type="email"
                  onChange={handleChange}
                  value={formdata.email}
                  name="email"
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 text-gray-500 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />
              </div>

            </div>

            {/* Password */}
            <div className="group relative text-gray-400 font-semibold">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#c9a050] transition-colors" />


              <input
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                name="password"
                value={formdata.password}
                minLength={8}
                placeholder="Enter your password"
                className="w-full pl-11 pr-12 py-2.5 rounded-xl border border-gray-200 text-gray-500 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a5c3a]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">

                <input
                  type="checkbox"
                  name="Remember"
                  checked={formdata.Remember}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#0a5c3a]"
                />

                <span className="text-sm text-gray-600">
                  Remember me
                </span>

              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-[#c9a050] hover:text-[#0a5c3a] font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full cursor-pointer py-2.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Login
            </button>

            {/* OR Divider */}
            <div className="relative flex items-center ">

              <div className="flex-1 border-t border-gray-200" />

              <span className="px-4 text-sm text-gray-400 bg-white">
                OR
              </span>

              <div className="flex-1 border-t border-gray-200" />

            </div>

            {/* Google Login */}
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-[#c9a050] hover:shadow-md text-gray-700 font-medium py-2 rounded-xl transition-all duration-300 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="group-hover:text-[#0a5c3a] transition-colors duration-300">Continue with Google</span>
            </button>

          </form>

          {/* Signup */}
          <div className="text-center mt-3">

            <p className="text-gray-500 text-sm">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="text-[#0a5c3a] font-semibold hover:text-[#c9a050]"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;