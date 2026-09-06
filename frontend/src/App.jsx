import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import FreeTrialClass from "./common/FreeTrialClass";
import About from "./pages/About";
import Fee from "./pages/Fee";
import Contact from "./pages/Contact";
import ToBeTeacher from "./pages/ToBeTeacher";
import Services from "./pages/Services";
import ObligatoryScience from "./components/courses/ObligatoryScience";
import BasicIslamicKnowledge from "./components/courses/BasicIslamicKnowledge";
import NamazDuaKalma from "./components/courses/NamazDuaKalma";
import QuranMemorization from "./components/courses/QuranMemorization";
import QuranTranslation from "./components/courses/QuranTranslation";
import NazraQuran from "./components/courses/NazraQuran";
import MadaniQaida from "./components/courses/MadaniQaida";
import NoraniQaida from "./components/courses/NoraniQaida";

// Dashboard Imports
import AdminDashboardLayout from "./AdminDashboard/adminDashboardLayout/AdminDashboardLayout";
import Students from "./AdminDashboard/adminDashboardPages/Students";
import Teachers from "./AdminDashboard/adminDashboardPages/Teachers";
import DashboardCourses from "./AdminDashboard/adminDashboardPages/DashboardCourses";
import Profile from "./AdminDashboard/adminDashboardPages/Profile";
import Settings from "./AdminDashboard/adminDashboardPages/Settings";
import Dashboard from "./AdminDashboard/adminDashboardPages/Dashboard";
import AllClasses from "./AdminDashboard/adminDashboardComponent/dashboard/upcomingClasses/AllClasses";
import ClassDetail from "./AdminDashboard/adminDashboardComponent/dashboard/upcomingClasses/ClassDetail";
import FeeManagement from "./AdminDashboard/adminDashboardPages/FeeManagement";
import Reports from "./AdminDashboard/adminDashboardPages/Reports";
import PrivacyPolicy from "./common/PrivacyPolicy";
import TermsConditions from "./common/TermsConditions";
import { ToastContainer } from "react-toastify";
// AUTH Imports  
import Login from "./common/auth/Login";
import ResetPassword from "./common/auth/ResetPassword";
import Signup from "./common/auth/Signup";
import VerifyOtp from "./common/auth/VerifyOtp";
import ForgotPassword from "./common/auth/ForgotPassword";
import UserProfile from "./common/userProfile/UserProfile";

// CLASS Imports 

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/*  MAIN WEBSITE ROUTES  */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses/norani-qaida" element={<NoraniQaida />} />
          <Route path="/courses/madni-qaida" element={<MadaniQaida />} />
          <Route path="/courses/nazra-quran" element={<NazraQuran />} />
          <Route path="/courses/quran-memorization" element={<QuranMemorization />} />
          <Route path="/courses/quran-translation" element={<QuranTranslation />} />
          <Route path="/courses/basic-islamic-knowledge" element={<BasicIslamicKnowledge />} />
          <Route path="/courses/namaz-dua-kalma" element={<NamazDuaKalma />} />
          <Route path="/courses/obligatory-science" element={<ObligatoryScience />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/teachers" element={<ToBeTeacher />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Route>


        {/*  AUTH ROUTES  */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/*  DASHBOARD ROUTES  */}
        <Route path="/dashboard" element={<AdminDashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="courses" element={<DashboardCourses />} />
          <Route path="fee" element={<FeeManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

          {/*  CLASS ROUTES  */}
          <Route path="classes" element={<AllClasses />} />
          <Route path="classes/:id" element={<ClassDetail />} />
        </Route>
        <Route path="/free-trial-class" element={<FreeTrialClass />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;