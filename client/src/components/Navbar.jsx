import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();


    const user = JSON.parse(
        localStorage.getItem("user")
    );


    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };


    return (

        <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

            {/* Left Side */}

            <div>

                <h2 className="text-xl font-bold text-gray-800">
                    CRM Dashboard
                </h2>

                <p className="text-xs text-gray-400">
                    Customer Relationship Management
                </p>

            </div>


            {/* Right Side */}

            <div className="flex items-center gap-4">

                {user && (

                    <div className="flex items-center gap-3">

                        {/* Avatar */}

                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">

                            {user.name
                                ?.charAt(0)
                                ?.toUpperCase()}

                        </div>


                        {/* User Information */}

                        <div className="hidden sm:block">

                            <p className="text-sm font-semibold text-gray-800">
                                {user.name}
                            </p>

                            <p className="text-xs text-gray-500">
                                {user.role}
                            </p>

                        </div>

                    </div>

                )}


                {/* Logout */}

                <button
                    onClick={logout}
                    className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition"
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;