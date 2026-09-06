import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaLock } from "react-icons/fa6";
import { useResetPasswordMutation } from "../../app/api/userApi";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const { token } = useParams();
   const navigate = useNavigate();
  
  const [resetPassword, { isLoading, isSuccess, isError, error }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("New Password:", password);
  
    try {
      await resetPassword({ token, password }).unwrap();
       navigate('/login')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4 py-5">

      <div className="w-[468px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="p-8  ">

          {/* Icon */}
          <div className="flex justify-center mb-2">
            <div className="w-14 h-14 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
              <FaLock className="text-2xl text-[#0a5c3a]" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">


            <h2 className="text-2xl  font-bold text-[#0a5c3a]">
              Create New Password
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Enter the code we sent to Ali123@gmail.com and pick a new password.
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* New Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                New Password
              </label>

              <div className="relative">


                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  required
                  minLength={6}
                  className="w-full pl-2 pr-4 py-2.5 rounded-md border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />

              </div>

            </div>

            {/* Confirm Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">



                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}

                  required
                  minLength={6}
                  className="w-full pl-2 pr-4 py-2.5 rounded-md border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />

              </div>

            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Reset Password
            </button>

          </form>

          {/* Back To Login */}
          <div className="text-center mt-7">
            <p className="text-sm text-gray-500">
              Remembered your password?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#0a5c3a] hover:text-[#c9a050] transition"
              >
                Sign in
              </Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ResetPassword;