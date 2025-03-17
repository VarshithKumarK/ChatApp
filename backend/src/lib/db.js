import mongoose from "mongoose";
import User from "../models/user.model.js";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected :${conn.connection.host}`);
    async function syncIndexes() {
      await User.syncIndexes();
      console.log("Indexes updated.");
    }

    syncIndexes();
  } catch (error) {
    console.log("MongoDB  connection error:", error);
  }
};
