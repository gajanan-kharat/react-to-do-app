const Feedback = require("../models/Feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const feedback = await Feedback.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: feedback,
      message: "Feedback submitted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error Occurred",
    });
  }
};

exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error fetching feedback",
    });
  }
};
