import React, { useState } from "react";
import { createLead } from "../../api/leadApi";
import { useNavigate } from "react-router-dom";

function AddLead() {
  const navigate = useNavigate();

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "New",
  });

  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createLead(lead);

      alert("Lead Added Successfully");

      navigate("/leads");
    } catch (error) {
      console.error(error);
      alert("Failed to add lead");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Lead</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Lead Name"
          value={lead.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={lead.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={lead.phone}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={lead.company}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="status"
          value={lead.status}
          onChange={handleChange}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
          <option value="Lost">Lost</option>
        </select>

        <br /><br />

        <button type="submit">
          Save Lead
        </button>

      </form>
    </div>
  );
}

export default AddLead;