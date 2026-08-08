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
    <div>
      <h1>Add Customer</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={customer.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customer.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={customer.phone}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={customer.company}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={customer.address}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Save Customer
        </button>

      </form>
    </div>
  );
}

export default AddCustomer;