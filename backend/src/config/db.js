import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
       console.log("Attempting to connect to MongoDB...");
       console.log("MONGO_URI:", ENV.MONGO_URI ? "✅ Set" : "❌ Not set");
       
       if (!ENV.MONGO_URI) {
           throw new Error("MONGO_URI environment variable is not set");
       }
       
       await mongoose.connect(ENV.MONGO_URI);
       console.log("Connected to MongoDB✅");

    } catch (error) {
        console.error("❌ Failed to connect to MongoDB");
        console.error("Error details:", error.message);
       
        if (process.env.NODE_ENV !== "production") {
          console.error("Full error:", error);
        }
        throw error;
    }};