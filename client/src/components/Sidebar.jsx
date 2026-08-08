import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {

    const linkClass = ({ isActive }) =>
        `block px-4 py-3 rounded-lg mb-2 transition ${
            isActive
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
        }`;

    return (

        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-5">

            {/* Logo */}
            <div className="mb-8">

                <h2 className="text-2xl font-bold text-blue-600">
                    CRM
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                    Customer Management
                </p>

            </div>


            {/* Navigation */}
            <nav>

                <NavLink
                    to="/dashboard"
                    className={linkClass}
                >
                    Dashboard
                </NavLink>


                <NavLink
                    to="/customers"
                    className={linkClass}
                >
                    Customers
                </NavLink>


                <NavLink
                    to="/leads"
                    className={linkClass}
                >
                    Leads
                </NavLink>


                <NavLink
                    to="/employees"
                    className={linkClass}
                >
                    Employees
                </NavLink>

            </nav>

        </aside>

    );
}

export default Sidebar;