const express = require("express");
const { getAllUsers, registerUser, loginUser } = require("../controllers/authController.js");

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
