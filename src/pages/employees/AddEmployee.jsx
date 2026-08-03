import React, { useState } from "react";
import { createEmployee } from "../../api/employeeApi";
import { useNavigate } from "react-router-dom";


function AddEmployee() {

  const navigate = useNavigate();


  const [employee, setEmployee] = useState({

    name: "",
    email: "",
    password: "",
    phone: "",
    role: "Sales Executive"

  });



  const handleChange = (e)=>{

    setEmployee({

      ...employee,
      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      await createEmployee(employee);


      alert("Employee Added Successfully");


      navigate("/employees");


    }catch(error){

      console.error(error);

      alert("Failed to add employee");

    }

  };



  return (

    <div style={{padding:"20px"}}>


      <h1>
        Add Employee
      </h1>



      <form onSubmit={handleSubmit}>


        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
        />


        <br/><br/>


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        />


        <br/><br/>


        <input
          type="password"
          name="password"
          placeholder="Password"
          value={employee.password}
          onChange={handleChange}
          required
        />


        <br/><br/>


        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={handleChange}
        />


        <br/><br/>



        <select
          name="role"
          value={employee.role}
          onChange={handleChange}
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


        <br/><br/>



        <button type="submit">

          Save Employee

        </button>



      </form>



    </div>

  );

}


export default AddEmployee;