const Customer = require("../models/Customer");


// Create Customer
const createCustomer = async (req, res) => {
    try {

        const customer = await Customer.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            customer
        });

    } catch(error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// Get All Customers
const getCustomers = async (req, res) => {
    try {

        const customers = await Customer.find();

        res.json({
            success: true,
            customers
        });

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Get Single Customer
const getCustomer = async (req, res) => {
    try {

        const customer = await Customer.findById(req.params.id);


        if(!customer){
            return res.status(404).json({
                message:"Customer not found"
            });
        }


        res.json({
            success:true,
            customer
        });


    } catch(error) {

        res.status(500).json({
            message:error.message
        });

    }
};



// Update Customer
const updateCustomer = async (req, res) => {
    try {

        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );


        res.json({
            success:true,
            customer
        });


    } catch(error) {

        res.status(500).json({
            message:error.message
        });

    }
};



// Delete Customer
const deleteCustomer = async (req,res)=>{
    try{

        await Customer.findByIdAndDelete(req.params.id);


        res.json({
            success:true,
            message:"Customer deleted"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};



// Search Customers
const searchCustomers = async (req, res) => {
    try {

        const keyword = req.query.search || "";


        const customers = await Customer.find({
            $or:[
                {
                    name:{
                        $regex:keyword,
                        $options:"i"
                    }
                },
                {
                    email:{
                        $regex:keyword,
                        $options:"i"
                    }
                },
                {
                    company:{
                        $regex:keyword,
                        $options:"i"
                    }
                }
            ]
        });


        res.json({
            success:true,
            customers
        });


    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};



module.exports = {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer,
    searchCustomers
};