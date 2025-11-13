import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {

      const username = encodeURIComponent(process.env.MONGO_USERNAME);
    const password = encodeURIComponent(process.env.MONGO_PASSWORD);
    const cluster = process.env.MONGO_CLUSTER;
    const database = process.env.MONGO_DATABASE;

    const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority&appName=paals`;

    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("DATABASE CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to Database:", error.message);
    process.exit(1);
  }
};
