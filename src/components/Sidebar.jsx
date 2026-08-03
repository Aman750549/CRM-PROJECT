import React from "react";
import { Link } from "react-router-dom";


function Sidebar(){

    return (

        <div
        style={{
            width:"200px",
            minHeight:"100vh",
            borderRight:"1px solid gray",
            padding:"20px"
        }}
        >

            <h2>
                CRM
            </h2>


            <Link to="/dashboard">
                Dashboard
            </Link>

            <br/><br/>


            <Link to="/customers">
                Customers
            </Link>

            <br/><br/>


            <Link to="/leads">
                Leads
            </Link>

            <br/><br/>


            <Link to="/employees">
                Employees
            </Link>


        </div>

    );

}


export default Sidebar;