import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

import NotificationSettings from "../adminDashboardComponent/Settings/NotificationSettings";
import AppearanceSettings from "../adminDashboardComponent/Settings/AppearanceSettings";
import PreferenceSettings from "../adminDashboardComponent/Settings/PreferenceSettings";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "English",
    timezone: "Asia/Karachi",
  });

  const [saved, setSaved] = useState(false);

  const handleSettingChange = (name, value) => {
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSaveSettings = () => {
    console.log("Settings saved:", settings);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0]">
      <div className="w-full px-3 sm:px-4 md:px-6 py-5">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0a5c3a]">
            Settings
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your dashboard preferences and settings
          </p>
        </div>

        {/* Settings */}
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Notifications */}
          <NotificationSettings
            notifications={settings.notifications}
            onChange={(e) =>
              handleSettingChange(
                "notifications",
                e.target.checked
              )
            }
          />

          {/* Appearance */}
          <AppearanceSettings
            darkMode={settings.darkMode}
            onChange={(e) =>
              handleSettingChange(
                "darkMode",
                e.target.checked
              )
            }
          />

          {/* Preferences */}
          <PreferenceSettings
            language={settings.language}
            timezone={settings.timezone}
            onLanguageChange={(e) =>
              handleSettingChange(
                "language",
                e.target.value
              )
            }
            onTimezoneChange={(e) =>
              handleSettingChange(
                "timezone",
                e.target.value
              )
            }
          />

          {/* Save All Settings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>
                <h2 className="font-bold text-[#0a5c3a]">
                  Save Changes
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Save your notification and dashboard preferences.
                </p>
              </div>

              <button
                type="button"
                onClick={handleSaveSettings}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0a5c3a] text-white rounded-xl font-semibold hover:bg-[#c9a050] transition-all duration-300"
              >
                <FaSave />
                Save All Settings
              </button>

            </div>

            {/* Success */}
            {saved && (
              <div className="mt-4 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                Settings saved successfully!
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;