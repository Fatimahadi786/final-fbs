// flightRoute.js

import express from 'express';
import {
  createFlight,
  getAllFlights,
  getFlightByNumber,
  updateFlight,
  deleteFlight,
  getFlightById, // Add the missing import
  getFlightByDate,
  delayFlight,
  cancelFlight
} from '../controllers/flightC.js';

const router = express.Router();

router.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Create a new flight
router.post('/', createFlight);

// Get all flights
router.get('/flights', getAllFlights);

// Get a specific flight by flight number
router.get('/flights/:flightId', getFlightByNumber);

router.get('/flight/:date', getFlightByDate);

// Update a flight by flight number
router.put('/flights/:flightNumber', updateFlight);

// Delete a flight by flight number
router.delete('/flights/:flightNumber', deleteFlight);

// Get a specific flight by ID
router.get('/flights/:id', getFlightById);

// Delay a flight by flight number
router.put('/flights/:id/delay', delayFlight);

// Cancel a flight by flight number
router.put('/flights/:id/cancel', cancelFlight);

export default router;
