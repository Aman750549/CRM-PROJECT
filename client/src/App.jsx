import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import CustomerList from "./pages/customers/CustomerList";
import AddCustomer from "./pages/customers/AddCustomer";
import EditCustomer from "./pages/customers/EditCustomer";

import LeadList from "./pages/leads/LeadList";
import AddLead from "./pages/leads/AddLead";
import EditLead from "./pages/leads/EditLead";

import EmployeeList from "./pages/employees/EmployeeList";
import AddEmployee from "./pages/employees/AddEmployee";
import EditEmployee from "./pages/employees/EditEmployee";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />



        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>

              <Layout>

                <Dashboard />

              </Layout>

            </ProtectedRoute>
          }
        />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Layout>

                <Dashboard />

              </Layout>

            </ProtectedRoute>
          }
        />




        {/* Customers */}

        <Route
          path="/customers"
          element={
            <ProtectedRoute
              roles={[
                "Admin",
                "Sales Manager",
                "Sales Executive"
              ]}
            >

              <Layout>

                <CustomerList />

              </Layout>

            </ProtectedRoute>
          }
        />


        <Route
          path="/customers/add"
          element={
            <ProtectedRoute
              roles={[
                "Admin",
                "Sales Manager"
              ]}
            >

              <Layout>

                <AddCustomer />

              </Layout>

            </ProtectedRoute>
          }
        />


        <Route
          path="/customers/edit/:id"
          element={
            <ProtectedRoute
              roles={[
                "Admin",
                "Sales Manager"
              ]}
            >

              <Layout>

                <EditCustomer />

              </Layout>

            </ProtectedRoute>
          }
        />




        {/* Leads */}

        <Route
          path="/leads"
          element={
            <ProtectedRoute
              roles={[
                "Admin",
                "Sales Manager",
                "Sales Executive"
              ]}
            >

              <Layout>

                <LeadList />

              </Layout>

            </ProtectedRoute>
          }
        />


        <Route
          path="/leads/add"
          element={
            <ProtectedRoute
              roles={[
                "Admin",
                "Sales Manager",
                "Sales Executive"
              ]}
            >

              <Layout>

                <AddLead />

              </Layout>

            </ProtectedRoute>
          }
        />


        <Route
          path="/leads/edit/:id"
          element={
            <ProtectedRoute
              roles={[
                "Admin",
                "Sales Manager"
              ]}
            >

              <Layout>

                <EditLead />

              </Layout>

            </ProtectedRoute>
          }
        />





        {/* Employees */}

        <Route
          path="/employees"
          element={
            <ProtectedRoute roles={["Admin"]}>

              <Layout>

                <EmployeeList />

              </Layout>

            </ProtectedRoute>
          }
        />


        <Route
          path="/employees/add"
          element={
            <ProtectedRoute roles={["Admin"]}>

              <Layout>

                <AddEmployee />

              </Layout>

            </ProtectedRoute>
          }
        />


        <Route
          path="/employees/edit/:id"
          element={
            <ProtectedRoute roles={["Admin"]}>

              <Layout>

                <EditEmployee />

              </Layout>

            </ProtectedRoute>
          }
        />


      </Routes>


    </BrowserRouter>

  );
}


export default App;