const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

async function makeAdmin() {
  const userName = "sithum kaveesha";
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    const user = await User.findOne({ userName });
    if (!user) {
      console.log(`User ${userName} not found!`);
      // Try with different casing just in case
      const userAlt = await User.findOne({ userName: new RegExp(`^${userName}$`, 'i') });
      if(userAlt) {
          userAlt.role = "admin";
          await userAlt.save();
          console.log(`User ${userAlt.userName} is now an ADMIN!`);
      }
    } else {
      user.role = "admin";
      await user.save();
      console.log(`User ${userName} is now an ADMIN!`);
    }

    mongoose.connection.close();
  } catch (error) {
    console.error("Error updating user role:", error);
    process.exit(1);
  }
}

makeAdmin();
