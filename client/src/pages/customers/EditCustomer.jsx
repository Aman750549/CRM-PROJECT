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
    <div style={{ padding: "20px" }}>
      <h1>Edit Customer</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <br />
        <br />

        <input
          type="text"
          name="company"
          value={customer.company}
          onChange={handleChange}
          placeholder="Company"
        />

        <br />
        <br />

        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <br />
        <br />

        <button type="submit">
          Update Customer
        </button>
      </form>
    </div>
  );
}

export default EditCustomer;