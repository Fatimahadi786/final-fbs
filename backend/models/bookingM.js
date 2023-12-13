import mongoose from "mongoose";

// Import the Passenger schema
import Passenger from "./passengerM.js";

const BookingSchema = new mongoose.Schema({
  flightType: {
    type: String,
    required: true,
  },
  flightClass: {
    type: String,
    required: true,
  },
  flight_id: {
    type: String,
    required: true,
  },
  pnrNumber:{
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  journeyDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,

  },

  journeyTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  hour: {  // Added field
    type: Number,  // Modify the type based on your requirement
    required: true,
  },
  adultFare: {
    type: Number,
    required: true,
  },
  childFare: {
    type: Number,
    required: true,
  },
  adults: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
    required: true,
  },
  passengers: {
    type: [Passenger.schema], // An array of PassengerSchema
    required: true,
  },
});

export default mongoose.model("FlightBooking", BookingSchema);
