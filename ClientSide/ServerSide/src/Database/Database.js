import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/HVAC-DB");
    console.log("Connected to MongoDB:", conn.connection.name);
  } catch (error) {
    console.log(error);
  }
};
export {connectDB}