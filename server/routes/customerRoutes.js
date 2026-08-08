const express = require("express");
const router = express.Router();


const {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer,
    searchCustomers
} = require("../controllers/customerController");


const { protect } = require("../middleware/authMiddleware");



// Create Customer
router.post("/", protect, createCustomer);


// Get All Customers
router.get("/", protect, getCustomers);


// Search Customers
router.get("/search", protect, searchCustomers);


// Get Single Customer
router.get("/:id", protect, getCustomer);


// Update Customer
router.put("/:id", protect, updateCustomer);


// Delete Customer
router.delete("/:id", protect, deleteCustomer);



module.exports = router;