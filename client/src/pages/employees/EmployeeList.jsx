import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    getEmployees,
    deleteEmployee
} from "../../api/employeeApi";


function EmployeeList() {

    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        fetchEmployees();
    }, []);


    const fetchEmployees = async () => {

        try {

            const response = await getEmployees();

            console.log(response.data);

            setEmployees(response.data.employees);

        } catch (error) {

            console.error(error);

        }

    };


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await deleteEmployee(id);

            fetchEmployees();

        } catch (error) {

            console.error(error);

        }

    };


    const getRoleStyle = (role) => {

        switch (role) {

            case "Admin":
                return "bg-purple-100 text-purple-700";

            case "Sales Manager":
                return "bg-blue-100 text-blue-700";

            case "Sales Executive":
                return "bg-green-100 text-green-700";

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
                        Employees
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage employees and their roles.
                    </p>

                </div>


                <Link
                    to="/employees/add"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
                >
                    + Add Employee
                </Link>

            </div>


            {/* Employee Table */}

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
                                    Phone
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Role
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {employees.length > 0 ? (

                                employees.map((employee) => (

                                    <tr
                                        key={employee._id}
                                        className="hover:bg-gray-50 transition"
                                    >

                                        {/* Name */}

                                        <td className="px-6 py-4">

                                            <div className="flex items-center gap-3">

                                                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">

                                                    {employee.name
                                                        ?.charAt(0)
                                                        ?.toUpperCase()}

                                                </div>


                                                <span className="font-medium text-gray-800">
                                                    {employee.name}
                                                </span>

                                            </div>

                                        </td>


                                        {/* Email */}

                                        <td className="px-6 py-4 text-gray-600">
                                            {employee.email}
                                        </td>


                                        {/* Phone */}

                                        <td className="px-6 py-4 text-gray-600">
                                            {employee.phone || "—"}
                                        </td>


                                        {/* Role */}

                                        <td className="px-6 py-4">

                                            <span
                                                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getRoleStyle(
                                                    employee.role
                                                )}`}
                                            >
                                                {employee.role}
                                            </span>

                                        </td>


                                        {/* Actions */}

                                        <td className="px-6 py-4">

                                            <div className="flex gap-2">

                                                <Link
                                                    to={`/employees/edit/${employee._id}`}
                                                    className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition"
                                                >
                                                    Edit
                                                </Link>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            employee._id
                                                        )
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
                                        No employees found.
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


export default EmployeeList;