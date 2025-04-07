const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log('Mongo URI:', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
