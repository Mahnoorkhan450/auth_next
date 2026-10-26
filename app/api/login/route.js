import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { headers } from "next/headers";
import { use } from "react";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {

    await connectDB();

    const { email, password } = await req.json();

    // email se user ko database mein find karo
    const user = await User.findOne({ email });


    if (!user) {
//for missing user
      return Response.json(
        
        { message: "Invalid email or password" },
        { status: 404 }   //not found
      );
    }
    

    const checkpass = await bcrypt.compare(
      password,
      user.password
    );

    if (!checkpass) {
       return Response.json(
        
        { message: "Invalid email or password" },
        { status: 404 }
      );
    }



    //jwt token generation
    const tokennn=jwt.sign(
        {useid:user._id,email: user.email},
          process.env.AUTH_SECRET,
         { expiresIn: "1d" }
        )


    return Response.json(
  { message: "Login successful" },
  {
    headers: {
      "Set-Cookie": `token=${tokennn}; HttpOnly; Path=/`,
    },
  }
);


  } 
  
  catch (error) {
  console.error("login error:", error);

  return Response.json(
    { message: "Internal server error" },
    { status: 500 }
  );
}
}