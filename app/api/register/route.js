import {connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";  //used to hash passsword

export  async function POST(req)
{
    try{
    await  connectDB();
  const {name,email,password}=await req.json()
  const hashedpassword= await bcrypt.hash(password,10)  

const existingUser = await User.findOne({ email });
if (existingUser) {
  return Response.json(
    { message: "Email already registered" },
    { status: 409 }  //conflict already exist
  );
}
  //now we have to create the user in dayabase using model

  await User.create({name,email,password:hashedpassword})
  return Response.json(
      { message: "Registration successful" },
      { status: 201 }    //created
  
  )
}
   catch (error) {
  console.error("Registration error:", error);

  return Response.json(
    { message: error.message || "Registration failed" },
    { status: 500 }   //internal server/database error
  );
}
}


