const express = require("express");
const router = express.Router();
const { signup, upload } = require("../controllers/userController");

router.post("/signup", upload.single("resume"), signup);

module.exports = router;
