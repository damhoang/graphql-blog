const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDB = async () => {
  conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to database");
};

module.exports = { connectDB };
