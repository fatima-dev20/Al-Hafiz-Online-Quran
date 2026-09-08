import React from "react";
import ProfileDetails from "./ProfileDetails";
import UserProfilePassword from "./UserProfilePassword";
import Logout from "./Logout";
import ProfileImageUpload from "./ProfileImageUpload";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-[#f8f6ef] px-4 sm:px-6 py-8 sm:py-12">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider">
            Account Settings
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a] mt-1">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your profile information and account security.
          </p>

        </div>

        <div className="space-y-6">

          <ProfileImageUpload/>

          <ProfileDetails />

          <UserProfilePassword />

          <Logout />

        </div>

      </div>

    </div>
  );
};

export default UserProfile;