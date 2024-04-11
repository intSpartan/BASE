import mongoose, { connect } from "mongoose";

const connectMongoDBI = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDBI;