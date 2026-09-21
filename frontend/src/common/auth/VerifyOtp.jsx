import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShieldHalved } from "react-icons/fa6";
import { toast } from "react-toastify";

import {
  useOtpVerifyMutation,
  useOtpResendMutation,
} from "../../app/api/userApi";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(60);

  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [otpVerify, { isLoading }] = useOtpVerifyMutation();
  const [otpResend, { isLoading: isResending }] =
    useOtpResendMutation();

  // Timer
  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  // OTP input
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      return toast.error("Please enter 6 digit OTP");
    }

    if (!email) {
      return toast.error("Email not found");
    }

    try {
      const response = await otpVerify({
        email,
        otp: otpCode,
      }).unwrap();

      toast.success(response.message);

      navigate("/login");
    } catch (error) {
      toast.error(error?.data?.message || "Invalid OTP");
    }
  };

  // Resend OTP
  const handleResend = async () => {
    if (seconds > 0 || !email) return;

    try {
      const response = await otpResend({
        email,
      }).unwrap();

      toast.success(response.message);

      setSeconds(60);
      setOtp(["", "", "", "", "", ""]);

      inputRefs.current[0]?.focus();
    } catch (error) {
      toast.error(
        error?.data?.message || "Failed to resend OTP"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center">

          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
            <FaShieldHalved className="text-2xl text-[#0a5c3a]" />
          </div>

          <h2 className="text-3xl font-bold text-[#0a5c3a] mt-2">
            Verify your email
          </h2>

          <p className="text-gray-500 mt-2">
            Enter the 6-digit OTP sent to your email.
          </p>

          {/* Spam / Junk message */}
          <p className="text-sm text-gray-400 mt-2 mb-7">
            Didn't receive it? Please check your{" "}
            <span className="font-semibold text-gray-500">
              Spam 
            </span>{" "}
            folder.
          </p>

        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit}>

          <div className="flex justify-center gap-2 mb-6">

            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                maxLength={1}
                inputMode="numeric"
                autoComplete="one-time-code"
                className="w-11 h-12 text-center text-xl font-bold border rounded-lg outline-none focus:border-[#c9a050]"
              />
            ))}

          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#0a5c3a] text-white rounded-lg font-semibold hover:bg-[#c9a050] disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>

        </form>

        {/* Resend OTP */}
        <div className="text-center mt-6">

          <p className="text-sm text-gray-500">

            Didn't receive the OTP?{" "}

            {seconds > 0 ? (
              <span className="text-gray-400">
                Resend in{" "}
                <span className="font-semibold">
                  {seconds}s
                </span>
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending}
                className="font-bold text-[#0a5c3a] hover:text-[#c9a050] disabled:opacity-50"
              >
                {isResending
                  ? "Sending..."
                  : "Resend OTP"}
              </button>
            )}

          </p>

        </div>

        {/* Back to Login */}
        <div className="text-center mt-6">

          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-[#0a5c3a] font-semibold hover:text-[#c9a050]"
          >
            <FaArrowLeft />
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
};

export default VerifyOtp;