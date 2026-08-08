import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    getLeads,
    deleteLead,
    assignLead
} from "../../api/leadApi";

import {
    getEmployees
} from "../../api/employeeApi";

function LeadList() {

    const [leads, setLeads] = useState([]);
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        fetchLeads();
        fetchEmployees();
    }, []);


    const fetchLeads = async () => {

        try {

            const response = await getLeads();

            setLeads(response.data.leads);

        } catch (error) {

            console.error(error);

        }

    };


    const fetchEmployees = async () => {

        try {

            const response = await getEmployees();

            setEmployees(response.data.employees);

        } catch (error) {

            console.error(error);

        }

    };


    const handleAssign = async (leadId, employeeId) => {

        if (!employeeId) {
            return;
        }

        try {

            await assignLead(
                leadId,
                employeeId
            );

            fetchLeads();

        } catch (error) {

            console.error(error);

        }

    };


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this lead?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteLead(id);

            fetchLeads();

        } catch (error) {

            console.error(error);

        }

    };


    const getStatusStyle = (status) => {

        switch (status) {

            case "New":
                return "bg-blue-100 text-blue-700";

            case "Contacted":
                return "bg-yellow-100 text-yellow-700";

            case "Converted":
                return "bg-green-100 text-green-700";

            case "Lost":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";

        }

    };


    return (

        <div className="p-6">

            {/* Header */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Leads
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage leads and track their progress.
                    </p>

                </div>


                <Link
                    to="/leads/add"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
                >
                    + Add Lead
                </Link>

            </div>


            {/* Lead Table */}

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-b border-gray-200">

                            <tr>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Name
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Email
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Assigned To
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {leads.length > 0 ? (

                                leads.map((lead) => (

                                    <tr
                                        key={lead._id}
                                        className="hover:bg-gray-50 transition"
                                    >

                                        {/* Name */}

                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {lead.name}
                                        </td>


                                        {/* Email */}

                                        <td className="px-6 py-4 text-gray-600">
                                            {lead.email}
                                        </td>


                                        {/* Status */}

                                        <td className="px-6 py-4">

                                            <span
                                                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                                                    lead.status
                                                )}`}
                                            >
                                                {lead.status}
                                            </span>

                                        </td>


                                        {/* Assignment */}

                                        <td className="px-6 py-4">

                                            <div className="flex flex-col gap-2">

                                                <span className="text-sm text-gray-700">

                                                    {lead.assignedTo
                                                        ? lead.assignedTo.name
                                                        : "Not Assigned"}

                                                </span>


                                                <select
                                                    onChange={(e) =>
                                                        handleAssign(
                                                            lead._id,
                                                            e.target.value
                                                        )
                                                    }
                                                    defaultValue=""
                                                    className="w-44 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                >

                                                    <option value="">
                                                        Assign Employee
                                                    </option>


                                                    {employees.map((emp) => (

                                                        <option
                                                            key={emp._id}
                                                            value={emp._id}
                                                        >
                                                            {emp.name}
                                                        </option>

                                                    ))}

                                                </select>

                                            </div>

                                        </td>


                                        {/* Actions */}

                                        <td className="px-6 py-4">

                                            <div className="flex gap-2">

                                                <Link
                                                    to={`/leads/edit/${lead._id}`}
                                                    className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition"
                                                >
                                                    Edit
                                                </Link>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(lead._id)
                                                    }
                                                    className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="px-6 py-10 text-center text-gray-500"
                                    >
                                        No leads found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default LeadList;