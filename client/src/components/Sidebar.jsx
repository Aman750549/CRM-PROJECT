import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition font-medium ${
            isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        }`;


    return (

        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">

            {/* Logo */}

            <div className="px-6 py-6 border-b border-gray-100">

                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">

                        <span className="text-white text-lg font-bold">
                            C
                        </span>

                    </div>


                    <div>

                        <h2 className="text-xl font-bold text-gray-800">
                            CRM
                        </h2>

                        <p className="text-xs text-gray-400">
                            Management System
                        </p>

                    </div>

                </div>

            </div>


            {/* Navigation */}

            <nav className="px-4 py-6 flex-1">

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
                    Main Menu
                </p>


                <NavLink
                    to="/dashboard"
                    className={linkClass}
                >

                    <span className="text-lg">
                        ▦
                    </span>

                    <span>
                        Dashboard
                    </span>

                </NavLink>


                <NavLink
                    to="/customers"
                    className={linkClass}
                >

                    <span className="text-lg">
                        👤
                    </span>

                    <span>
                        Customers
                    </span>

                </NavLink>


                <NavLink
                    to="/leads"
                    className={linkClass}
                >

                    <span className="text-lg">
                        🎯
                    </span>

                    <span>
                        Leads
                    </span>

                </NavLink>


                <NavLink
                    to="/employees"
                    className={linkClass}
                >

                    <span className="text-lg">
                        👥
                    </span>

                    <span>
                        Employees
                    </span>

                </NavLink>

            </nav>


            {/* Bottom */}

            <div className="p-4 border-t border-gray-100">

                <div className="bg-blue-50 rounded-lg p-4">

                    <p className="text-sm font-semibold text-blue-800">
                        CRM Platform
                    </p>

                    <p className="text-xs text-blue-600 mt-1">
                        Manage your business efficiently.
                    </p>

                </div>

            </div>

        </aside>

    );

}

export default Sidebar;