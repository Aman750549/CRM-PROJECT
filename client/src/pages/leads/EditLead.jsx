import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLeadById, updateLead } from "../../api/leadApi";

function EditLead() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [lead, setLead] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        status: "New",
    });


    useEffect(() => {
        fetchLead();
    }, []);


    const fetchLead = async () => {

        try {

            const response = await getLeadById(id);

            setLead(response.data.lead);

        } catch (error) {

            console.error(error);

            alert("Failed to load lead");

        }

    };


    const handleChange = (e) => {

        setLead({
            ...lead,
            [e.target.name]: e.target.value,
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateLead(id, lead);

            alert("Lead Updated Successfully");

            navigate("/leads");

        } catch (error) {

            console.error(error);

            alert("Failed to update lead");

        }

    };


    return (

        <div className="p-6">

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    Edit Lead
                </h1>

                <p className="text-gray-500 mt-1">
                    Update lead information and status.
                </p>

            </div>


            {/* Form Card */}

            <div className="max-w-3xl bg-white border border-gray-200 rounded-xl shadow-sm p-6">

                <form onSubmit={handleSubmit}>

                    {/* Name */}

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Lead Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={lead.name}
                            onChange={handleChange}
                            placeholder="Enter lead name"
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
                            value={lead.email}
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
                            value={lead.phone}
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
                            value={lead.company}
                            onChange={handleChange}
                            placeholder="Enter company name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>


                    {/* Status */}

                    <div className="mb-6">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Lead Status
                        </label>

                        <select
                            name="status"
                            value={lead.status}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >

                            <option value="New">
                                New
                            </option>

                            <option value="Contacted">
                                Contacted
                            </option>

                            <option value="Converted">
                                Converted
                            </option>

                            <option value="Lost">
                                Lost
                            </option>

                        </select>

                    </div>


                    {/* Buttons */}

                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                        >
                            Update Lead
                        </button>


                        <button
                            type="button"
                            onClick={() => navigate("/leads")}
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

export default EditLead;