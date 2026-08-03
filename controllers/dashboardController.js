const User = require("../models/User");
const Customer = require("../models/Customer");
const Lead = require("../models/Lead");


// Dashboard Stats
const getDashboardStats = async (req, res) => {
    try {

        const users = await User.countDocuments();

        const customers = await Customer.countDocuments();

        const leads = await Lead.countDocuments();

        const convertedLeads = await Lead.countDocuments({
            status: "Converted"
        });

        const newLeads = await Lead.countDocuments({
            status: "New"
        });

        const lostLeads = await Lead.countDocuments({
            status: "Lost"
        });


        res.json({
            success: true,
            stats: {
                users,
                customers,
                leads,
                convertedLeads,
                newLeads,
                lostLeads
            }
        });


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getDashboardStats
};