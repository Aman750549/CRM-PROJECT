import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();



    const login = async()=>{

        try{

            const res = await API.post("/auth/login",{
                email,
                password
            });


            // Save token
            localStorage.setItem(
                "token",
                res.data.token
            );


            // Save user details for RBAC
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );


            navigate("/dashboard");


        }catch(error){

            console.error(error);

            alert("Login Failed");

        }

    };



    return(
        <div>

            <h1>CRM Login</h1>


            <input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />


            <input
            placeholder="Password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            />


            <button onClick={login}>
                Login
            </button>


        </div>
    );

}


export default Login;