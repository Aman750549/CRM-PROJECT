import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar(){

    const navigate = useNavigate();


    const user = JSON.parse(
        localStorage.getItem("user")
    );



    const logout = ()=>{

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };



    return (

        <div
        style={{
            height:"60px",
            borderBottom:"1px solid gray",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"0 20px"
        }}
        >


            <h3>
                CRM Dashboard
            </h3>



            <div>

                {
                    user &&
                    <>
                    {user.name} ({user.role})
                    </>
                }


                <button
                onClick={logout}
                style={{
                    marginLeft:"20px"
                }}
                >

                    Logout

                </button>


            </div>


        </div>

    );

}


export default Navbar;