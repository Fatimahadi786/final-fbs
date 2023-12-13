import express from 'express';
import {
  createPassenger,
  getPassengers,
  getPassengerById,
  updatePassenger,
  deletePassenger,
} from '../controllers/passengerC.js'; // Import your controller functions

const router = express.Router();

// Create a new passenger
router.post('/passengers', createPassenger);

// Get all passengers
router.get('/passengers', getPassengers);

// Get a specific passenger by ID
router.get('/passengers/:id', getPassengerById);

// Update a passenger by ID
router.put('/passengers/:id', updatePassenger);

// Delete a passenger by ID
router.delete('/passengers/:id', deletePassenger);

export default router;
