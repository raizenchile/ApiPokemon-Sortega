const express = require("express");
const router = express.Router();
const { registerTrainer, loginTrainer } = require("../controllers/authController");

// Registro
router.post("/register", registerTrainer);

// Login
router.post("/login", loginTrainer);

module.exports = router;