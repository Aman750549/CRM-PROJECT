import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {

    return (

        <div className="min-h-screen bg-gray-50">

            {/* Navbar */}

            <Navbar />


            {/* Main Layout */}

            <div className="flex min-h-[calc(100vh-64px)]">

                {/* Sidebar */}

                <Sidebar />


                {/* Page Content */}

                <main className="flex-1 min-w-0 overflow-x-hidden">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default Layout;