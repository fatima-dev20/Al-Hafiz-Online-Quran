import React, { useRef, useState, useEffect } from "react";
import { FaUser, FaCamera } from "react-icons/fa6";
import { useUpdateProfileImageMutation } from "../../app/api/userApi";

// Image validation helper function
const validateImage = (file) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  
  if (!allowedTypes.includes(file.type)) {
    return "Only JPEG, JPG and PNG images are allowed";
  }
  
  if (file.size > 5 * 1024 * 1024) {
    return "Image size must be less than 5 MB";
  }
  
  return null;
};

const ProfileImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  
  const [updateProfileImage, { isLoading }] = useUpdateProfileImageMutation();

  // Cleanup preview URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file
    const errorMessage = validateImage(file);
    if (errorMessage) {
      alert(errorMessage);
      e.target.value = ""; // reset input
      return;
    }

    // Save image & create preview
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await updateProfileImage(formData).unwrap();
      console.log("IMAGE UPLOAD RESPONSE:", response);
      alert("Profile picture uploaded successfully");
      
      // Upload ke baad state clear karne ke liye (Optional)
      setImage(null); 
    } catch (error) {
      console.error("IMAGE UPLOAD ERROR:", error);
      alert(error?.data?.message || "Image upload failed");
    }
  };

  return (
    <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
      
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-11 h-11 rounded-xl bg-[#0a5c3a]/10 flex items-center justify-center">
          <FaUser className="text-[#0a5c3a]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0a5c3a]">Personalization</h2>
          <p className="text-sm text-gray-500">Customize your profile</p>
        </div>
      </div>

      {/* Hidden File Input */}
      <input 
        ref={fileInputRef} 
        type="file" 
        accept="image/jpeg,image/jpg,image/png" 
        className="hidden" 
        onChange={handleImageChange} 
      />

      {/* Profile Picture Upload Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        
        {/* Avatar Preview & Camera Trigger */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-[#f8f6ef] border-2 border-[#c9a050] flex items-center justify-center overflow-hidden">
            {preview ? (
              <img src={preview} alt="Profile preview" className="w-full h-full object-cover" />
            ) : (
              <FaUser className="text-5xl text-[#0a5c3a]" />
            )}
          </div>
          
          <button 
            type="button" 
            onClick={() => fileInputRef.current.click()} 
            className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-[#0a5c3a] text-white flex items-center justify-center shadow-md hover:bg-[#c9a050] transition"
          >
            <FaCamera className="text-sm" />
          </button>
        </div>

        {/* Info & Action Button */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-gray-800">Profile Picture</h3>
          <p className="text-sm text-gray-500 mt-1">Max 5 MB</p>
          <p className="text-sm text-gray-500">Only JPEG, JPG, PNG</p>

          <button 
            type="button" 
            onClick={handleUpload} 
            disabled={isLoading || !image} 
            className="mt-3 px-5 py-2.5 rounded-xl bg-[#0a5c3a] text-white text-sm font-semibold hover:bg-[#c9a050] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Uploading..." : "Upload Picture"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProfileImageUpload;