const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getProfile } = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

console.log("protect:", protect);
console.log("getProfile:", getProfile);


router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, getProfile);


module.exports = router;