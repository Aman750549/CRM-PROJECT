const express = require("express");
const router = express.Router();


const {
    createLead,
    getLeads,
    getLead,
    updateLead,
    deleteLead,
    assignLead,
    getEmployeeLeads,
    filterLeads,
    convertLead
} = require("../controllers/leadController");


const { protect } = require("../middleware/authMiddleware");



// Create Lead
router.post("/", protect, createLead);


// Get All Leads
router.get("/", protect, getLeads);


// Employee My Leads
router.get("/employee/my-leads", protect, getEmployeeLeads);


// Filter Leads By Status
router.get("/filter/status", protect, filterLeads);


// Convert Lead To Customer
router.post("/:id/convert", protect, convertLead);


// Get Single Lead
router.get("/:id", protect, getLead);


// Assign Lead To Employee
router.put("/:id/assign", protect, assignLead);


// Update Lead
router.put("/:id", protect, updateLead);


// Delete Lead
router.delete("/:id", protect, deleteLead);



module.exports = router;