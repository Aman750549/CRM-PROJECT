import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getLeads,
  deleteLead,
  assignLead
} from "../../api/leadApi";

import {
  getEmployees
} from "../../api/employeeApi";


function LeadList() {

  const [leads, setLeads] = useState([]);

  const [employees, setEmployees] = useState([]);



  useEffect(()=>{

    fetchLeads();
    fetchEmployees();

  },[]);



  const fetchLeads = async()=>{

    try{

      const response = await getLeads();

      setLeads(response.data.leads);

    }catch(error){

      console.error(error);

    }

  };



  const fetchEmployees = async()=>{

    try{

      const response = await getEmployees();

      setEmployees(response.data.employees);

    }catch(error){

      console.error(error);

    }

  };



  const handleAssign = async(leadId, employeeId)=>{

    try{

      await assignLead(
        leadId,
        employeeId
      );

      fetchLeads();

    }catch(error){

      console.error(error);

    }

  };



  const handleDelete = async(id)=>{

    await deleteLead(id);

    fetchLeads();

  };



  return (

    <div style={{padding:"20px"}}>

      <h1>
        Lead Management
      </h1>


      <Link to="/leads/add">

        <button>
          Add Lead
        </button>

      </Link>


      <br/><br/>


      <table border="1" cellPadding="10">


        <thead>

          <tr>

            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Action</th>

          </tr>

        </thead>



        <tbody>


        {
          leads.map((lead)=>(

            <tr key={lead._id}>


              <td>
                {lead.name}
              </td>


              <td>
                {lead.email}
              </td>


              <td>
                {lead.status}
              </td>


              <td>

                {
                  lead.assignedTo
                  ? lead.assignedTo.name
                  : "Not Assigned"
                }


                <br/>


                <select
                  onChange={(e)=>
                    handleAssign(
                      lead._id,
                      e.target.value
                    )
                  }
                  defaultValue=""
                >

                  <option value="">
                    Assign Employee
                  </option>


                  {
                    employees.map((emp)=>(

                      <option
                        key={emp._id}
                        value={emp._id}
                      >

                        {emp.name}

                      </option>

                    ))
                  }


                </select>


              </td>


              <td>


                <Link
                  to={`/leads/edit/${lead._id}`}
                >

                  <button>
                    Edit
                  </button>

                </Link>


                {" "}


                <button
                  onClick={()=>handleDelete(lead._id)}
                >

                  Delete

                </button>


              </td>


            </tr>

          ))
        }


        </tbody>


      </table>


    </div>

  );

}


export default LeadList;