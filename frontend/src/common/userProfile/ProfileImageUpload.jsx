import React, { useRef, useState } from "react";
import { FaCamera, FaTrash, FaUser } from "react-icons/fa6";

import {useMyProfileQuery, useUpdateProfileImageMutation,
   useRemoveProfileImageMutation} from "../../app/api/userApi";

const ProfileImageUpload = () => {
  const fileInputRef = useRef(null);

  const { data } = useMyProfileQuery();

  const [updateProfileImage, { isLoading: isUploading }] =
    useUpdateProfileImageMutation();

  const [removeProfileImage, { isLoading: isRemoving }] =
    useRemoveProfileImageMutation();

  const [preview, setPreview] = useState(null);

  const user = data?.user;

  const profileImage = preview || user?.profileImage || "";

  // Open file picker
  const handleChooseImage = () => {
    if (isUploading || isRemoving) return;

    fileInputRef.current?.click();
  };

  // Upload profile image
  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Allowed image types
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG and PNG images are allowed.");
      e.target.value = "";
      return;
    }

    // Maximum 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      e.target.value = "";
      return;
    }

    // Local preview
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);

    // FormData
    const formData = new FormData();
    formData.append("image", file);

    try {
      await updateProfileImage(formData).unwrap();

      // Preview remove
      setPreview(null);

      // Success alert
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Profile image upload error:", error);

      setPreview(null);

      // Error alert
      alert(
        error?.data?.message ||
          "Failed to update profile image"
      );
    }

    // Same file dobara select karne ke liye
    e.target.value = "";
  };

  // Remove profile image
  const handleRemoveImage = async () => {
    try {
      await removeProfileImage().unwrap();

      setPreview(null);

      // Success alert
      alert("Profile picture removed successfully!");
    } catch (error) {
      console.error("Remove profile image error:", error);

      // Error alert
      alert(
        error?.data?.message ||
          "Failed to remove profile image"
      );
    }
  };

  return (
    <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
      
      {/* Heading */}
      <div className="mb-7">
        <h2 className="text-xl font-bold text-[#0a5c3a]">
          Profile Picture
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Update your profile picture.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">

        {/* Profile Image */}
        <div className="relative">

          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#0a5c3a] bg-[#c9a050]/10 flex items-center justify-center">

            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUser className="text-5xl text-[#c9a050]" />
            )}

          </div>

          {/* Camera Button */}
          <button
            type="button"
            onClick={handleChooseImage}
            disabled={isUploading || isRemoving}
            className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-[#0a5c3a] text-white flex items-center justify-center hover:bg-[#084a2f] transition disabled:opacity-50"
            title="Change profile picture"
          >
            <FaCamera />
          </button>

        </div>

        {/* Actions */}
        <div className="text-center sm:text-left">

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleImageChange}
            className="hidden"
          />

          <div className="flex flex-wrap justify-center sm:justify-start gap-3">

            {/* Change Photo */}
            <button
              type="button"
              onClick={handleChooseImage}
              disabled={isUploading || isRemoving}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition disabled:opacity-50"
            >
              <FaCamera />

              {isUploading
                ? "Uploading..."
                : "Change Photo"}
            </button>

            {/* Remove Photo */}
            {user?.profileImage && (
              <button
                type="button"
                onClick={handleRemoveImage}
                disabled={isUploading || isRemoving}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-red-200 text-red-600 font-semibold hover:bg-red-50 transition disabled:opacity-50"
              >
                <FaTrash />

                {isRemoving
                  ? "Removing..."
                  : "Remove"}
              </button>
            )}

          </div>

          <p className="text-xs text-gray-400 mt-3">
            JPG, JPEG or PNG. Maximum file size 5MB.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ProfileImageUpload;