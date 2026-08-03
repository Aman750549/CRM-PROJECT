const Employee = require("../models/Employee");


// Create Employee
const createEmployee = async (req, res) => {
    try {

        const employee = await Employee.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            employee
        });

    } catch(error){

    console.log("CREATE EMPLOYEE ERROR:", error);

    res.status(500).json({
        message:error.message
    });

}
};


// Get All Employees
const getEmployees = async (req,res)=>{
    try{

        const employees = await Employee.find();

        res.json({
            success:true,
            employees
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


// Get Single Employee
const getEmployee = async(req,res)=>{
    try{

        const employee = await Employee.findById(req.params.id);

        res.json({
            success:true,
            employee
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


// Update Employee
const updateEmployee = async(req,res)=>{
    try{

        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.json({
            success:true,
            employee
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


// Delete Employee
const deleteEmployee = async(req,res)=>{
    try{

        await Employee.findByIdAndDelete(req.params.id);

        res.json({
            success:true,
            message:"Employee deleted"
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


module.exports={
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
};