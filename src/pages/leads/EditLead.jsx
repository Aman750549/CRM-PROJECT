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
    <div style={{ padding: "20px" }}>
      <h1>Edit Lead</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={lead.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          value={lead.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          value={lead.phone}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="company"
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
          Update Lead
        </button>
      </form>
    </div>
  );
}

export default EditLead;