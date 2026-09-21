import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaUser,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import {
  useMyProfileQuery,
  useLogOutMutation,
} from "../app/api/userApi";

const courses = [
  {
    name: "Quran Courses",
    path: "/courses/quran-courses",
    subCourses: [
      {
        name: "Noorani Qaida Course",
        path: "/courses/norani-qaida",
      },
      {
        name: "Madni Qaida",
        path: "/courses/madni-qaida",
      },
      {
        name: "Nazra Quran",
        path: "/courses/nazra-quran",
      },
      {
        name: "Quran Memorization",
        path: "/courses/quran-memorization",
      },
      {
        name: "Quran Interpretation & Translation",
        path: "/courses/quran-translation",
      },
    ],
  },
  {
    name: "Namaz – Dua – Kalma",
    path: "/courses/namaz-dua-kalma",
  },
  {
    name: "Basic Islamic Knowledge",
    path: "/courses/basic-islamic-knowledge",
  },
  {
    name: "Obligatory Science Course",
    path: "/courses/obligatory-science",
  },
];

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Fee", path: "/fee" },
  { name: "To Be Teacher", path: "/teachers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [quranOpen, setQuranOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileQuranOpen, setMobileQuranOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading } = useMyProfileQuery();

  const [logOut] = useLogOutMutation();

  const user = data?.user;

  // LOGOUT
  const handleLogout = async () => {
    try {
      await logOut().unwrap();

      setAccountOpen(false);
      setMobileOpen(false);

      navigate("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  // NAVBAR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLOSE MENUS WHEN ROUTE CHANGES
  useEffect(() => {
    setCoursesOpen(false);
    setQuranOpen(false);
    setMobileOpen(false);
    setMobileCoursesOpen(false);
    setMobileQuranOpen(false);
    setAccountOpen(false);
  }, [location.pathname]);

  const isDarkPage =
  
    [
      "/login",
      "/signup",
      "/forgot-password",
      "/fee",
      "/courses/basic-islamic-knowledge",
      "/courses/madni-qaida",
      "/contact",
      "/privacy-policy",
      "/terms-conditions",
      
    ].includes(location.pathname);

  return (
    <>
      {/*  NAVBAR  */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isDarkPage || scrolled
            ? "bg-[#0a5c3a]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/*  LOGO  */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Al Hafiz Online"
              className="w-11 h-11 rounded-lg object-cover"
            />

            <div>
              <h2 className="text-white font-bold text-lg">
                Al Hafiz-Online
              </h2>

              <p className="text-white text-xs">
                Learn Quran Online
              </p>
            </div>
          </Link>

          {/*  DESKTOP MENU  */}
          <ul className="hidden lg:flex items-center gap-2 text-white">

            {/* HOME / ABOUT / SERVICES */}
            {menu.slice(0, 3).map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="px-4 py-2 rounded-lg hover:bg-[#c9a050]/30 hover:text-[#f5d48a] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/*  COURSES  */}
            <li
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => {
                setCoursesOpen(false);
                setQuranOpen(false);
              }}
            >
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#c9a050]/30 hover:text-[#f5d48a] transition"
              >
                Courses

                <FaChevronDown
                  className={`text-xs transition ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coursesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="w-80 bg-white rounded-xl shadow-2xl p-2">

                    {courses.map((course) => (
                      <div
                        key={course.name}
                        className="relative"
                        onMouseEnter={() =>
                          course.subCourses && setQuranOpen(true)
                        }
                        onMouseLeave={() =>
                          course.subCourses && setQuranOpen(false)
                        }
                      >

                        {/* MAIN COURSE */}
                        {course.subCourses ? (
                          <div className="flex items-center justify-between px-4 py-3 rounded-lg text-[#0a5c3a] hover:bg-[#f8f3e9] hover:text-[#c9a050] cursor-pointer">
                            <span>{course.name}</span>

                            <FaChevronRight
                              className={`text-xs ${
                                quranOpen
                                  ? "text-[#c9a050]"
                                  : "text-gray-400"
                              }`}
                            />
                          </div>
                        ) : (
                          <Link
                            to={course.path}
                            className="block px-4 py-3 rounded-lg text-[#0a5c3a] hover:bg-[#f8f3e9] hover:text-[#c9a050]"
                          >
                            {course.name}
                          </Link>
                        )}

                        {/* QURAN SUB MENU */}
                        {course.subCourses && quranOpen && (
                          <div className="absolute left-full top-0 w-80 bg-white rounded-xl shadow-2xl p-2">

                            {course.subCourses.map((subCourse) => (
                              <Link
                                key={subCourse.name}
                                to={subCourse.path}
                                className="block px-4 py-3 rounded-lg text-[#0a5c3a] hover:bg-[#f8f3e9] hover:text-[#c9a050]"
                              >
                                {subCourse.name}
                              </Link>
                            ))}

                          </div>
                        )}

                      </div>
                    ))}

                  </div>
                </div>
              )}
            </li>

            {/* FEE / TEACHER / CONTACT */}
            {menu.slice(3).map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="px-4 py-2 rounded-lg hover:bg-[#c9a050]/30 hover:text-[#f5d48a] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/*  DESKTOP ACCOUNT  */}
          <div className="hidden lg:flex items-center">

            {isLoading ? (
              <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse" />
            ) : user ? (

              <div className="relative">

                {/* ACCOUNT BUTTON */}
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="flex items-center gap-3 px-3 py-2 bo rounded-full bg-[#0a5c3a] hover:bg-[#0a5c3a]/60 border border-white/10 transition-all duration-200"
                >

                  {/* USER ICON */}
                  <div className="w-9 h-9 rounded-full bg-[#c9a050] flex items-center justify-center">
                    <FaUser className="text-sm text-white" />
                  </div>

                  {/* USER NAME */}
                  <div className="text-left hidden xl:block">
                    <p className="text-sm font-semibold text-white leading-tight">
                      {user.name || "My Account"}
                    </p>

                    <p className="text-[11px] text-white/60">
                      Account
                    </p>
                  </div>

                  {/* ARROW */}
                  <FaChevronDown
                    className={`text-xs text-white transition-transform duration-200 ${
                      accountOpen
                        ? "rotate-180 text-[#f5d48a]"
                        : ""
                    }`}
                  />

                </button>

                {/* ACCOUNT DROPDOWN */}
                {accountOpen && (
                  <div className="absolute right-0 top-[calc(100%+10px)] w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">

                    {/* MY PROFILE */}
                    <Link
                      to="/user-profile"
                      onClick={() => setAccountOpen(false)}
                      className="flex items-center gap-3 px-4 py-1.5 text-[#0a5c3a] hover:bg-[#f8f3e9] hover:text-[#c9a050] transition"
                    >
                      <FaUser className="text-sm" />

                      <span className="font-medium">
                        My Profile
                      </span>
                    </Link>

                    {/* LOGOUT */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-1.5 text-left text-red-600 hover:bg-red-50 transition"
                    >
                      <FaArrowRightFromBracket className="text-sm" />

                      <span className="font-medium">
                        Logout
                      </span>
                    </button>

                  </div>
                )}

              </div>

            ) : (

              /* NOT LOGGED IN */
              <Link to="/login">
                <button className="px-5 py-2 bg-[#c9a050] text-white rounded-full font-semibold hover:bg-[#b8942e] transition">
                  Login
                </button>
              </Link>

            )}

          </div>

          {/*  MOBILE BUTTON  */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            <FaBars />
          </button>

        </div>
      </nav>

      {/*  MOBILE MENU  */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[380px] bg-[#0a5c3a] text-white z-[60] shadow-2xl transition-transform duration-300 ${
          mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 text-2xl hover:text-[#c9a050]"
        >
          <RxCross1 />
        </button>

        {/* MOBILE LOGO */}
        <div className="p-6 border-b border-white/10">

          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-11 h-11 rounded-lg"
            />

            <div>
              <h2 className="font-bold text-lg">
                Al Hafiz-Online
              </h2>

              <p className="text-xs text-white/60">
                Learn Quran Online
              </p>
            </div>
          </Link>

        </div>

        {/* MOBILE LINKS */}
        <div className="p-6 overflow-y-auto h-full">

          <div className="space-y-2">

            {/* HOME / ABOUT / SERVICES */}
            {menu.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block text-lg rounded-xl px-3 hover:bg-[#c9a050]/20 py-1 font-semibold hover:text-[#c9a050]"
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE COURSES */}
            <div>

              <button
                onClick={() =>
                  setMobileCoursesOpen(!mobileCoursesOpen)
                }
                className="w-full flex hover:bg-[#c9a050]/20 py-1 rounded-xl px-3 justify-between items-center text-lg font-semibold"
              >
                Courses

                <FaChevronDown
                  className={`text-sm transition ${
                    mobileCoursesOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {mobileCoursesOpen && (
                <div className=" ml-4 pl-4 border-l border-[#c9a050]/40 space-y-1">

                  {courses.map((course) => (
                    <div key={course.name}>

                      {course.subCourses ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileQuranOpen(
                                !mobileQuranOpen
                              )
                            }
                            className="w-full rounded-xl px-3 hover:bg-[#c9a050]/20 py-1 flex justify-between text-left text-[#f5d48a] font-semibold"
                          >
                            {course.name}

                            <FaChevronDown
                              className={`text-xs transition ${
                                mobileQuranOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {mobileQuranOpen && (
                            <div className="mt-3 ml-3 space-y-1">

                              {course.subCourses.map(
                                (subCourse) => (
                                  <Link
                                    key={subCourse.name}
                                    to={subCourse.path}
                                    onClick={() =>
                                      setMobileOpen(false)
                                    }
                                    className="block text-sm text-white/70 hover:text-[#c9a050] rounded-xl px-3 hover:bg-[#c9a050]/20 py-1"
                                  >
                                    {subCourse.name}
                                  </Link>
                                )
                              )}

                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={course.path}
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className="block text-white/80 hover:text-[#c9a050] hover:bg-[#c9a050]/20 py-1 rounded-xl px-3"
                        >
                          {course.name}
                        </Link>
                      )}

                    </div>
                  ))}

                </div>
              )}

            </div>

            {/* FEE / TEACHER / CONTACT */}
            {menu.slice(3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-semibold rounded-xl px-3 hover:text-[#c9a050] hover:bg-[#c9a050]/20 py-1"
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/*  MOBILE ACCOUNT  */}
          <div className="mt-6">

            {isLoading ? (

              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse" />
              </div>

            ) : user ? (

              <div className="w-full">

                {/* ACCOUNT BUTTON */}
                <button
                  onClick={() =>
                    setAccountOpen(!accountOpen)
                  }
                  className="w-full flex items-center justify-between py-3 px-2 text-white hover:text-[#f5d48a] transition"
                >

                  <div className="flex items-center gap-3">

                    {/* USER ICON */}
                    <div className="w-12 h-12 rounded-full bg-[#c9a050] flex items-center justify-center">
                      <FaUser className="text-xl text-white" />
                    </div>

                    {/* USER NAME */}
                    <div className="text-left">

                      <p className="font-semibold">
                        {user.name || "My Account"}
                      </p>

                      <p className="text-sm text-white/50">
                        Account
                      </p>

                    </div>

                  </div>

                  {/* ARROW */}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      accountOpen
                        ? "rotate-180 text-[#f5d48a]"
                        : ""
                    }`}
                  />

                </button>

                {/* MOBILE ACCOUNT DROPDOWN */}
                {accountOpen && (
                  <div className="ml-12 mt-2 space-y-1">

                    {/* MY PROFILE */}
                    <Link
                      to="/user-profile"
                      onClick={() => {
                        setAccountOpen(false);
                        setMobileOpen(false);
                      }}
                      className="flex items-center gap-3 py-1 px-3 rounded-lg font-semibold text-md text-white/80 hover:bg-white/10 hover:text-[#f5d48a] transition"
                    >
                      <FaUser className="text-sm" />

                      My Profile
                    </Link>

                    {/* LOGOUT */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 text-left py-1 px-3 rounded-lg text-md font-semibold text-red-400 hover:bg-red-600/10 hover:text-red-500 transition"
                    >
                      <FaArrowRightFromBracket className="text-sm" />

                      Logout
                    </button>

                  </div>
                )}

              </div>

            ) : (

              /* NOT LOGGED IN */
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                <button className="w-full py-3 bg-[#c9a050] text-white rounded-lg font-semibold hover:bg-[#b8942e] transition">
                  Login
                </button>
              </Link>

            )}

          </div>

        </div>
      </div>

      {/*  MOBILE OVERLAY  */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;