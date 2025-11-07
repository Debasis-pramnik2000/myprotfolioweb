const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact"); // ✅ make sure this path is correct

// @route   POST /api/contact
// @desc    Save contact form data
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate fields
    if (!name || !email || !message) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    // Create new message
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ msg: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Server error:", err.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
});

module.exports = router;