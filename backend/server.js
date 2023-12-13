import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/userRouth.js";
import flightRoutes from './routes/flightRoute.js';
import passengerRoutes from './routes/passengerRoute.js'
import bookingRoutes from './routes/bookingRoute.js'
import emailRoutes from './routes/sendEmailRoute.js'



dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

// Middlewares
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:8800'], credentials: true, methods: 'POST' }));



app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/flights", flightRoutes)
app.use("/api/passenger", passengerRoutes);
app.use("/api/booking", bookingRoutes);
app.use('/api/email', emailRoutes);



app.use((err, req, res, next) => {
  console.log("Error:", err); // Log the error for debugging
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  connect();
  console.log(`Server listening on port ${PORT}`);
  console.log("Express Server is started.");
});
