const express = require("express");

const router = express.Router();

const { submitFeedback, getAllFeedback } = require("../controllers/feedbackController");

router.get('/', getAllFeedback)

router.post("/", submitFeedback);

module.exports = router;
