const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
); //allow cross origin request

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/todos", todoRoutes);
app.use("/feedback", feedbackRoutes);
const PORT = 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1);
  });
