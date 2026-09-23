import React from "react";
import { useNavigate } from "react-router-dom";
import { useTeacherProfileQuery } from "../app/api/teacherApi";
import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaIdCard,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBookOpen,
  FaLanguage,
  FaCalendarAlt,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";

const TeacherProfile = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useTeacherProfileQuery();

  // ===== LOADING =====
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6ef]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0a5c3a] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // ===== NO APPLICATION (404) =====
  if (error?.status === 404) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6ef] px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md text-center">
          <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
            <FaTimesCircle className="text-4xl text-yellow-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            No Application Found
          </h2>
          <p className="text-gray-500 mb-6">
            You haven't applied as a teacher yet.
          </p>
          <button
            onClick={() => navigate("/teachers")}
            className="px-6 py-3 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    );
  }

  const app = data?.application;
  if (!app) return null;

  // ===== STATUS CONFIG =====
  const statusConfig = {
    pending: {
      icon: <FaClock />,
      text: "Pending Review",
      color: "text-yellow-700",
      border: "border-yellow-300",
      iconBg: "bg-yellow-200",
      iconColor: "text-yellow-600",
      message:
        "Your application is under review. Admin will contact you soon.",
    },
    approved: {
      icon: <FaCheckCircle />,
      text: "Approved",
      color: "text-green-700",
      border: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      message: "Congratulations! You are now an approved teacher.",
    },
    rejected: {
      icon: <FaTimesCircle />,
      text: "Rejected",
      color: "text-red-700",
      border: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      message: "Your application was rejected. You can re-apply below.",
    },
  };

  const status = statusConfig[app.status];

  return (
    <div className="min-h-screen bg-[#f8f6ef] px-4 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider">
            My Application
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a] mt-1">
            Teacher Profile
          </h1>
        </div>

        {/* Status Card */}
        <div
          className={`bg-white rounded-3xl shadow-lg border-2 ${status.border} p-6 sm:p-8 mb-6`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-full ${status.iconBg} flex items-center justify-center ${status.iconColor} text-2xl flex-shrink-0`}
            >
              {status.icon}
            </div>
            <div>
              <h2 className={`text-xl font-bold ${status.color}`}>
                {status.text}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{status.message}</p>
            </div>
          </div>

          {/* Rejection Reason */}
          {app.status === "rejected" && app.rejectionReason && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-700">
                <b>Reason:</b> {app.rejectionReason}
              </p>
            </div>
          )}

          {/* Re-apply button if rejected */}
          {app.status === "rejected" && (
            <button
              onClick={() => navigate("/teachers")}
              className="mt-4 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Re-apply as Teacher
            </button>
          )}

          {/* Approved info */}
          {app.status === "approved" && app.approvedAt && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-sm text-green-700">
                <b>Approved on:</b>{" "}
                {new Date(app.approvedAt).toLocaleDateString("en-PK", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          )}
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
          <h3 className="text-lg font-bold text-[#0a5c3a] mb-6 flex items-center gap-2">
            <FaUser className="text-[#c9a050]" />
            Application Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <DetailRow icon={<FaUser />} label="Full Name" value={app.fullName} />
            <DetailRow icon={<FaUser />} label="Father Name" value={app.fatherName} />
            <DetailRow icon={<FaIdCard />} label="CNIC" value={app.cnic} />
            <DetailRow
              icon={<FaCalendarAlt />}
              label="Date of Birth"
              value={
                app.dateOfBirth
                  ? new Date(app.dateOfBirth).toLocaleDateString("en-PK")
                  : "-"
              }
            />
            <DetailRow
              icon={<FaUser />}
              label="Gender"
              value={
                app.gender === "male"
                  ? "Male"
                  : app.gender === "female"
                  ? "Female"
                  : "-"
              }
            />
            <DetailRow icon={<FaPhone />} label="Phone" value={app.phone} />
            {app.whatsapp && (
              <DetailRow icon={<FaPhone />} label="WhatsApp" value={app.whatsapp} />
            )}
            <DetailRow icon={<FaMapMarkerAlt />} label="City" value={app.city} />
            <DetailRow icon={<FaMapMarkerAlt />} label="Country" value={app.country} />
            <DetailRow
              icon={<FaGraduationCap />}
              label="Qualification"
              value={app.qualification}
            />
            <DetailRow
              icon={<FaGraduationCap />}
              label="Islamic Qualification"
              value={app.islamicQualification}
            />
            <DetailRow
              icon={<FaClock />}
              label="Experience"
              value={`${app.experience || 0} years`}
            />
            <DetailRow
              icon={<FaBookOpen />}
              label="Subjects"
              value={app.subjects?.join(", ") || "-"}
            />
            <DetailRow
              icon={<FaLanguage />}
              label="Languages"
              value={app.languages?.join(", ") || "-"}
            />
            <DetailRow
              icon={<FaCalendarAlt />}
              label="Submitted On"
              value={new Date(app.createdAt).toLocaleDateString("en-PK", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            />
          </div>

          {/* About */}
          {app.about && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-[#0a5c3a] mb-2">About</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{app.about}</p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
          >
            <FaHome />
            Back to Home
          </button>
          <button
            onClick={() => navigate("/user-profile")}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition"
          >
            <FaArrowLeft />
            Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper Component
const DetailRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 rounded-lg bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050] flex-shrink-0 mt-0.5">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
      <p className="text-sm text-gray-800 font-semibold mt-0.5">{value || "-"}</p>
    </div>
  </div>
);

export default TeacherProfile;