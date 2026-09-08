import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { useForgotPasswordMutation } from "../../app/api/userApi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false); // 

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //  Email backend ko bhej rahe hain
      await forgotPassword({ email }).unwrap();

      setEmailSent(true);

    } catch (error) {
      console.log("Forgot password error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4 py-10">

      <div className="w-[468px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="p-8 sm:p-12 md:p-14 flex flex-col justify-center">

          {/*  SUCCESS SCREEN */}
          {emailSent ? (
            <div className="text-center">

              {/* Check Icon */}
              <div className="w-16 h-16 rounded-full bg-[#0a5c3a] flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-white text-2xl" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold text-[#0a5c3a]">
                Check Your Email
              </h2>

              {/* Message */}
              <p className="text-gray-500 mt-4 leading-relaxed">
                We have sent a password reset link to:
              </p>

              {/* Email */}
              <p className="font-semibold text-gray-700 mt-2 break-all">
                {email}
              </p>

              <p className="text-sm text-gray-400 mt-5 leading-relaxed">
                Please check your inbox and click the
                <span className="font-semibold text-gray-600">
                  {" "}Reset Password{" "}
                </span>
                button to create a new password.
              </p>

              {/* Back Login */}
              <Link
                to="/login"
                className="inline-block mt-7 text-[#0a5c3a] font-semibold hover:text-[#c9a050] transition"
              >
                Back to Login
              </Link>

            </div>
          ) : (

            /*  FORGOT PASSWORD FORM */
            <>
              {/* Heading */}
              <div className="mb-8">

                <h2 className="text-2xl font-bold text-[#0a5c3a]">
                  Forgot Password?
                </h2>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  Enter your email address and we'll send you a link to
                  reset your password.
                </p>

              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Email */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <div className="relative">

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="w-full pl-2 pr-4 py-2.5 rounded-md border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                    />

                  </div>

                </div>

                {/* Reset Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition-all duration-300 shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                >

                  <span>
                    {isLoading ? "Sending..." : "Send reset link"}
                  </span>

                  {!isLoading && (
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}

                </button>

              </form>

              {/* Back To Login */}
              <div className="text-center mt-7">

                <p className="text-sm text-gray-500">
                  Remembered it?{" "}

                  <Link
                    to="/login"
                    className="font-semibold text-[#0a5c3a] hover:text-[#c9a050] transition"
                  >
                    Back to Login
                  </Link>

                </p>

              </div>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;