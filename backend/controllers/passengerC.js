import Passenger from '../models/passengerM.js'; // Import your Mongoose model

// Create a new passenger
export const createPassenger = async (req, res) => {
  try {
    const newPassenger = new Passenger(req.body);
    const savedPassenger = await newPassenger.save();
    res.status(201).json(savedPassenger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all passengers
export const getPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.status(200).json(passengers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a specific passenger by ID
export const getPassengerById = async (req, res) => {
  const { id } = req.params;

  try {
    const passenger = await Passenger.findById(id);
    res.status(200).json(passenger);
  } catch (error) {
    res.status(404).json({ message: 'Passenger not found' });
  }
};

// Update a passenger by ID
export const updatePassenger = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedPassenger = await Passenger.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(updatedPassenger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a passenger by ID
export const deletePassenger = async (req, res) => {
  const { id } = req.params;

  try {
    await Passenger.findByIdAndRemove(id);
    res.status(204).json({ message: 'Passenger deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Passenger not found' });
  }
};
