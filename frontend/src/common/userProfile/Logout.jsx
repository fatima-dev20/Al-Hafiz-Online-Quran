import React from "react";
import { FaRightFromBracket } from "react-icons/fa6";
import { useLogOutMutation } from "../../app/api/userApi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();


    const [logOut, { isLoading }] = useLogOutMutation()


    const handleLogout = async () => {
        try {
            await logOut().unwrap();

            alert("Logout successfully!");

            navigate("/login");
        } catch (error) {
            console.log("Logout error:", error);
            alert("Logout failed");
        }
    }

    return (
        <section className="bg-white rounded-3xl shadow-lg border border-red-100 p-6 sm:p-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                <div>

                    <h2 className="text-xl font-bold text-gray-800">
                        Logout
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Sign out from your account on this device.
                    </p>

                </div>


                <button
                    type="button"
                    onClick={handleLogout} disabled={isLoading}
                    className="inline-flex items-center justify-center cursor-pointer gap-2 px-7 py-3.5 rounded-xl border border-red-200 text-red-600 font-semibold hover:bg-red-50 transition"
                >
                    {isLoading ? "Logging out..." : "Logout"}
                </button>

            </div>

        </section>
    );
};

export default Logout;