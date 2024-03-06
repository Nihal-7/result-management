const express = require("express");
const { getUser, currentUser, registerUser } = require("../controller/userController");
const router = express.Router();
const session = require("express-session");
const validateToken = require("../middleware/jwtTokenHandler");

router.post("/register", validateToken, registerUser);

router.post("/login", getUser);

router.get("/current", validateToken, currentUser);

module.exports = router;