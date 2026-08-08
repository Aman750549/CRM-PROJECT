import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getEmployees,
  deleteEmployee
} from "../../api/employeeApi";


function EmployeeList() {

  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    fetchEmployees();
  }, []);



  const fetchEmployees = async () => {

    try {

      const response = await getEmployees();

      console.log(response.data);

      setEmployees(response.data.employees);

    } catch(error) {

      console.error(error);

    }

  };



  const handleDelete = async(id)=>{

    const confirmDelete = window.confirm(
      "Delete this employee?"
    );


    if(!confirmDelete) return;


    try{

      await deleteEmployee(id);

      fetchEmployees();

    }catch(error){

      console.error(error);

    }

  };



  return (

    <div style={{padding:"20px"}}>

      <h1>
        Employee Management
      </h1>


      <Link to="/employees/add">

        <button>
          Add Employee
        </button>

      </Link>


      <br/>
      <br/>



      <table
        border="1"
        cellPadding="10"
        style={{
          width:"100%",
          borderCollapse:"collapse"
        }}
      >


        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Role</th>

            <th>Action</th>


          </tr>

        </thead>



        <tbody>


        {
          employees.length > 0 ? (

            employees.map((employee)=>(

              <tr key={employee._id}>


                <td>
                  {employee.name}
                </td>


                <td>
                  {employee.email}
                </td>


                <td>
                  {employee.phone}
                </td>


                <td>
                  {employee.role}
                </td>



                <td>


                  <Link
                    to={`/employees/edit/${employee._id}`}
                  >

                    <button>
                      Edit
                    </button>

                  </Link>


                  {" "}


                  <button
                    onClick={()=>handleDelete(employee._id)}
                  >

                    Delete

                  </button>


                </td>



              </tr>

            ))


          ) : (

            <tr>

              <td colSpan="5">
                No Employees Found
              </td>

            </tr>

          )
        }


        </tbody>


      </table>


    </div>

  );

}


export default EmployeeList;