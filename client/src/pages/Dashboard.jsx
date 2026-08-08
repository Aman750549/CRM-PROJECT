import { useEffect, useState } from "react";
import API from "../api/axios";


function Dashboard(){

    const [stats,setStats] = useState({});


    useEffect(()=>{

        const fetchStats = async()=>{

            try{

                const res = await API.get("/dashboard");

                setStats(res.data.stats);

            }
            catch(error){

                console.log(error);

            }

        };


        fetchStats();

    },[]);



    return(

        <div>


            <h1>
                Dashboard
            </h1>


            <h3>
                Users: {stats.users}
            </h3>


            <h3>
                Customers: {stats.customers}
            </h3>


            <h3>
                Leads: {stats.leads}
            </h3>


            <h3>
                Converted: {stats.convertedLeads}
            </h3>


        </div>

    );

}


export default Dashboard;