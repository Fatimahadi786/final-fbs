import mongoose from "mongoose";

const PassengerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"], // Add other gender options as needed
    required: true,
  },
});

export default mongoose.model("Passenger", PassengerSchema);
