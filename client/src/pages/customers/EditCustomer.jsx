import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getCustomerById,
    updateCustomer,
} from "../../api/customerApi";

function EditCustomer() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
    });


    useEffect(() => {
        fetchCustomer();
    }, []);


    const fetchCustomer = async () => {

        try {

            const response = await getCustomerById(id);

            setCustomer(response.data.customer);

        } catch (error) {

            console.error(error);

            alert("Failed to load customer");

        }

    };


    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateCustomer(id, customer);

            alert("Customer Updated Successfully");

            navigate("/customers");

        } catch (error) {

            console.error(error);

            alert("Failed to update customer");

        }

    };


    return (

        <div className="p-6">

            {/* Header */}
            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    Edit Customer
                </h1>

                <p className="text-gray-500 mt-1">
                    Update customer information.
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
                            value={customer.name}
                            onChange={handleChange}
                            placeholder="Enter customer name"
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
                            value={customer.email}
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
                            value={customer.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
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
                            value={customer.company}
                            onChange={handleChange}
                            placeholder="Enter company name"
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
                            value={customer.address}
                            onChange={handleChange}
                            placeholder="Enter customer address"
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
                            Update Customer
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

export default EditCustomer;