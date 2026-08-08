import React, { useState } from "react";
import { createCustomer } from "../../api/customerApi";
import { useNavigate } from "react-router-dom";

function AddCustomer() {

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: ""
    });


    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createCustomer(customer);

            alert("Customer Added Successfully");

            navigate("/customers");

        } catch (error) {

            console.error(error);

            alert("Failed to add customer");

        }

    };


    return (

        <div className="p-6">

            {/* Header */}
            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    Add Customer
                </h1>

                <p className="text-gray-500 mt-1">
                    Add a new customer to your CRM.
                </p>

            </div>


            {/* Form Card */}
            <div className="max-w-3xl bg-white border border-gray-200 rounded-xl shadow-sm p-6">

                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Customer Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter customer name"
                            value={customer.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Email */}
                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={customer.email}
                            onChange={handleChange}
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
                            placeholder="Enter phone number"
                            value={customer.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Company */}
                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                        </label>

                        <input
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            value={customer.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Address */}
                    <div className="mb-6">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address
                        </label>

                        <textarea
                            name="address"
                            placeholder="Enter customer address"
                            value={customer.address}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        />

                    </div>


                    {/* Buttons */}
                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                        >
                            Save Customer
                        </button>


                        <button
                            type="button"
                            onClick={() => navigate("/customers")}
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

export default AddCustomer;