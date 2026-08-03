const Lead = require("../models/Lead");
const Customer = require("../models/Customer");


// Create Lead
const createLead = async (req, res) => {
    try {

        const lead = await Lead.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            lead
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// Get All Leads
const getLeads = async (req, res) => {
    try {

        const leads = await Lead.find()
            .populate("assignedTo", "name email");

        res.json({
            success: true,
            leads
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Get Single Lead
const getLead = async (req, res) => {
    try {

        const lead = await Lead.findById(req.params.id)
            .populate("assignedTo", "name email");


        if (!lead) {
            return res.status(404).json({
                message: "Lead not found"
            });
        }


        res.json({
            success: true,
            lead
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Update Lead
const updateLead = async (req, res) => {
    try {

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );


        res.json({
            success: true,
            lead
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Delete Lead
const deleteLead = async (req, res) => {
    try {

        await Lead.findByIdAndDelete(req.params.id);


        res.json({
            success: true,
            message: "Lead deleted"
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Assign Lead To Employee
const assignLead = async (req, res) => {
    try {

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            {
                assignedTo: req.body.employeeId
            },
            {
                new: true
            }
        );


        if (!lead) {
            return res.status(404).json({
                message: "Lead not found"
            });
        }


        res.json({
            success: true,
            message: "Lead assigned successfully",
            lead
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Employee Assigned Leads
const getEmployeeLeads = async (req, res) => {
    try {

        const leads = await Lead.find({
            assignedTo: req.user.id
        });


        res.json({
            success: true,
            leads
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Filter Leads By Status
const filterLeads = async (req, res) => {
    try {

        const status = req.query.status;


        const leads = await Lead.find({
            status: status
        })
        .populate("assignedTo", "name email");


        res.json({
            success: true,
            leads
        });


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Convert Lead To Customer
const convertLead = async (req, res) => {

    try {

        const lead = await Lead.findById(req.params.id);


        if (!lead) {

            return res.status(404).json({
                message: "Lead not found"
            });

        }


        const customer = await Customer.create({

            name: lead.name,

            email: lead.email,

            phone: lead.phone,

            company: lead.company,

            createdBy: req.user.id

        });



        lead.status = "Converted";

        await lead.save();



        res.json({

            success: true,

            message: "Lead converted successfully",

            customer,

            lead

        });


    } catch(error) {

        res.status(500).json({

            message: error.message

        });

    }

};





module.exports = {

    createLead,

    getLeads,

    getLead,

    updateLead,

    deleteLead,

    assignLead,

    getEmployeeLeads,

    filterLeads,

    convertLead

};