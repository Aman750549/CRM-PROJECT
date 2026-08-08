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



  useEffect(()=>{

    fetchEmployee();

  },[]);



  const fetchEmployee = async()=>{

    try{

      const response = await getEmployeeById(id);

      setEmployee(response.data.employee);


    }catch(error){

      console.error(error);

      alert("Failed to load employee");

    }

  };



  const handleChange = (e)=>{

    setEmployee({

      ...employee,
      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      await updateEmployee(id, employee);


      alert("Employee Updated Successfully");


      navigate("/employees");


    }catch(error){

      console.error(error);

      alert("Failed to update employee");

    }

  };



  return (

    <div style={{padding:"20px"}}>


      <h1>
        Edit Employee
      </h1>



      <form onSubmit={handleSubmit}>


        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />


        <br/><br/>


        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />


        <br/><br/>


        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
          placeholder="Phone"
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

          Update Employee

        </button>



      </form>



    </div>

  );

}


export default EditEmployee;