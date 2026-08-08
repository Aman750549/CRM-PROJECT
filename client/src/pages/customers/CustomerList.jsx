import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCustomers, deleteCustomer } from "../../api/customerApi";

function CustomerList() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);


    const fetchCustomers = async () => {

        try {

            const response = await getCustomers();

            setCustomers(response.data.customers);

        } catch (error) {

            console.error("Error fetching customers:", error);

        }

    };


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this customer?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteCustomer(id);

            fetchCustomers();

        } catch (error) {

            console.error("Error deleting customer:", error);

        }

    };


    return (

        <div className="p-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Customers
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage your customer information.
                    </p>

                </div>


                <Link
                    to="/customers/add"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
                >
                    + Add Customer
                </Link>

            </div>


            {/* Customer Table */}
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
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {customers.length > 0 ? (

                                customers.map((customer) => (

                                    <tr
                                        key={customer._id}
                                        className="hover:bg-gray-50 transition"
                                    >

                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {customer.name}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {customer.email}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {customer.phone || "-"}
                                        </td>

                                        <td className="px-6 py-4">

                                            <div className="flex gap-2">

                                                <Link
                                                    to={`/customers/edit/${customer._id}`}
                                                    className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition"
                                                >
                                                    Edit
                                                </Link>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(customer._id)
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
                                        colSpan="4"
                                        className="px-6 py-10 text-center text-gray-500"
                                    >
                                        No customers found.
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

export default CustomerList;