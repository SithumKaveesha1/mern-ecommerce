const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

async function listUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const users = await User.find({});
    console.log(users);
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
}

listUsers();
