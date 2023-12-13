import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: {
      type: String,
     // required: true,
    //  unique: true,
    },
    phoneNo: {
      type: String,
     // required: true,
     // unique: true,
    },
    email: {
      type: String,
     // required: true,
     // unique: true,
    },
    verifyemail: {
      type: String,
     // required: true,
     // unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    confirmPassword: {
      type: String,
      // required: true,
    },
    isAdmin: {
      type: Boolean, 
      default: true,
    },
 
  },


  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
