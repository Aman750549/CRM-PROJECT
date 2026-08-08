import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getEmployeeById,
    updateEmployee
} from "../../api/employeeApi";


function EditEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();


    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        phone: "",
        role: "Sales Executive"
    });


    useEffect(() => {
        fetchEmployee();
    }, []);


    const fetchEmployee = async () => {

        try {

            const response = await getEmployeeById(id);

            setEmployee(response.data.employee);

        } catch (error) {

            console.error(error);

            alert("Failed to load employee");

        }

    };


    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateEmployee(id, employee);

            alert("Employee Updated Successfully");

            navigate("/employees");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update employee"
            );

        }

    };


    return (

        <div className="p-6">

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    Edit Employee
                </h1>

                <p className="text-gray-500 mt-1">
                    Update employee information and role.
                </p>

            </div>


            {/* Form Card */}

            <div className="max-w-3xl bg-white border border-gray-200 rounded-xl shadow-sm p-6">

                <form onSubmit={handleSubmit}>

                    {/* Name */}

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Employee Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={employee.name}
                            onChange={handleChange}
                            placeholder="Enter employee name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Email */}

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Phone */}

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={employee.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Role */}

                    <div className="mb-6">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Employee Role
                        </label>

                        <select
                            name="role"
                            value={employee.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >

                            <option value="Admin">
                                Admin
                            </option>

                            <option value="Sales Manager">
                                Sales Manager
                            </option>

                            <option value="Sales Executive">
                                Sales Executive
                            </option>

                        </select>

                    </div>


                    {/* Buttons */}

                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                        >
                            Update Employee
                        </button>


                        <button
                            type="button"
                            onClick={() => navigate("/employees")}
                            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}


export default EditEmployee;