import { useEffect, useState } from "react";
import API from "../api/axios";


function Dashboard() {

    const [stats, setStats] = useState({});

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchStats = async () => {

            try {

                const res = await API.get("/dashboard");

                setStats(res.data.stats);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };


        fetchStats();

    }, []);


    const cards = [

        {
            title: "Total Users",
            value: stats.users ?? 0,
            description: "Registered users",
            icon: "👥",
            iconBg: "bg-blue-100",
            iconText: "text-blue-600"
        },

        {
            title: "Customers",
            value: stats.customers ?? 0,
            description: "Total customers",
            icon: "👤",
            iconBg: "bg-green-100",
            iconText: "text-green-600"
        },

        {
            title: "Leads",
            value: stats.leads ?? 0,
            description: "Active leads",
            icon: "🎯",
            iconBg: "bg-orange-100",
            iconText: "text-orange-600"
        },

        {
            title: "Converted Leads",
            value: stats.convertedLeads ?? 0,
            description: "Successfully converted",
            icon: "✓",
            iconBg: "bg-purple-100",
            iconText: "text-purple-600"
        }

    ];


    return (

        <div className="p-6 bg-gray-50 min-h-full">

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    Dashboard
                </h1>

                <p className="text-gray-500 mt-1">
                    Welcome back! Here's what's happening with your CRM.
                </p>

            </div>


            {/* Statistics */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition"
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p className="text-sm font-medium text-gray-500">
                                    {card.title}
                                </p>


                                <h2 className="text-3xl font-bold text-gray-800 mt-2">

                                    {loading
                                        ? "..."
                                        : card.value
                                    }

                                </h2>

                            </div>


                            <div
                                className={`w-11 h-11 rounded-lg ${card.iconBg} ${card.iconText} flex items-center justify-center text-xl font-bold`}
                            >
                                {card.icon}
                            </div>

                        </div>


                        <p className="text-sm text-gray-500 mt-4">
                            {card.description}
                        </p>

                    </div>

                ))}

            </div>


            {/* Main Overview */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">


                {/* CRM Overview */}

                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm p-6">

                    <h2 className="text-xl font-semibold text-gray-800">
                        CRM Overview
                    </h2>


                    <p className="text-gray-500 mt-2">
                        Manage your customers, leads, and employees
                        from one centralized platform.
                    </p>


                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

                        <div className="p-4 bg-gray-50 rounded-lg">

                            <p className="text-sm text-gray-500">
                                Customers
                            </p>

                            <p className="text-xl font-bold text-gray-800 mt-1">
                                {stats.customers ?? 0}
                            </p>

                        </div>


                        <div className="p-4 bg-gray-50 rounded-lg">

                            <p className="text-sm text-gray-500">
                                Leads
                            </p>

                            <p className="text-xl font-bold text-gray-800 mt-1">
                                {stats.leads ?? 0}
                            </p>

                        </div>


                        <div className="p-4 bg-gray-50 rounded-lg">

                            <p className="text-sm text-gray-500">
                                Converted
                            </p>

                            <p className="text-xl font-bold text-gray-800 mt-1">
                                {stats.convertedLeads ?? 0}
                            </p>

                        </div>

                    </div>

                </div>


                {/* Quick Summary */}

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">

                    <h2 className="text-xl font-semibold text-gray-800">
                        Quick Summary
                    </h2>


                    <div className="mt-5 space-y-5">


                        <div className="flex items-center justify-between">

                            <span className="text-gray-500">
                                Users
                            </span>

                            <span className="font-semibold text-gray-800">
                                {stats.users ?? 0}
                            </span>

                        </div>


                        <div className="border-t border-gray-100" />


                        <div className="flex items-center justify-between">

                            <span className="text-gray-500">
                                Customers
                            </span>

                            <span className="font-semibold text-gray-800">
                                {stats.customers ?? 0}
                            </span>

                        </div>


                        <div className="border-t border-gray-100" />


                        <div className="flex items-center justify-between">

                            <span className="text-gray-500">
                                Leads
                            </span>

                            <span className="font-semibold text-gray-800">
                                {stats.leads ?? 0}
                            </span>

                        </div>


                        <div className="border-t border-gray-100" />


                        <div className="flex items-center justify-between">

                            <span className="text-gray-500">
                                Converted
                            </span>

                            <span className="font-semibold text-green-600">
                                {stats.convertedLeads ?? 0}
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom Information */}

            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">

                <div className="flex gap-3">

                    <div className="text-blue-600 text-xl">
                        ℹ
                    </div>


                    <div>

                        <h3 className="font-semibold text-blue-800">
                            CRM Management
                        </h3>

                        <p className="text-sm text-blue-700 mt-1">
                            Use the sidebar to manage customers,
                            track leads, and manage your employees.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default Dashboard;