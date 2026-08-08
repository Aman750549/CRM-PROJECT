const express = require("express");
const router = express.Router();


const {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
}=require("../controllers/employeeController");


const {protect}=require("../middleware/authMiddleware");


router.post("/",protect,createEmployee);

router.get("/",protect,getEmployees);

router.get("/:id",protect,getEmployee);

router.put("/:id",protect,updateEmployee);

router.delete("/:id",protect,deleteEmployee);


module.exports=router;