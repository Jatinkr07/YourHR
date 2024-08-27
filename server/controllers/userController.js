const User = require("../models/User");
const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const signup = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      resume: req.file.path,
    });
    await user.save();
    res.status(200).json({ message: "User signed up successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { signup, upload };
