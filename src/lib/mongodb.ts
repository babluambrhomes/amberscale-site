import mongoose from "mongoose";

const uri:string = process.env.MONGODB_URI || '';

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

export async function connectDb() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  return mongoose.connect(uri);
}

export default connectDb;