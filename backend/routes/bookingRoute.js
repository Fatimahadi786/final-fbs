import express from "express";
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingC.js";

const router = express.Router();

// Route to create a new flight booking
router.post("/bookings", createBooking);

// Route to get all flight bookings
router.get("/bookings", getAllBookings);

// Route to get a specific flight booking by ID
router.get("/bookings/:bookingId", getBookingById);

// Route to update a specific flight booking by ID
router.put("/bookings/:bookingId", updateBooking);

// Route to delete a specific flight booking by ID
router.delete("/bookings/:bookingId", deleteBooking);

export default router;
