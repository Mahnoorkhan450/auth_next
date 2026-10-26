import mongoose from "mongoose";
const userschema=new mongoose.Schema({   //schema mai hm structure or rules def krty user data ke 

    name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

});
const User=mongoose.models.User||mongoose.model ("User",userschema);


export default User;


//model is a tool which is used to save the data in database
// Ek tool hai jiski help se hum database mein user ka data save, 
// find, update aur delete kar sakte hain.