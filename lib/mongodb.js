// import mongoose from "mongoose";  //mongooose lib used to connect next js to database 

// export async function connectDB() {

//   await mongoose.connect(process.env.MONGODB_URI);   //env sy database ka connection
// }


import mongoose from "mongoose";

export async function connectDB() {
  try {

    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected successfully");

  } 
  catch (error) {

    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
}
