import Flight from "../models/flightM.js";

// Controller to handle fetching all flights
export const getAllFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();
    console.log(flights)
    res.status(200).json({ success: true, flights });
  } catch (error) {
    next(error);
  }
};

export const getFlightByDate = async (req, res, next) => {
  const { date } = req.params;
  console.log(date);

  try {
    const flight = await Flight.find({
      journeyDate: date
    });
    
    if (!flight) {
      return res.status(200).json({ success: false, message: 'Flight not foundd', flight : [] });
    }

    res.status(200).json({ success: true, flight });
  } catch (error) {
    next(error);
  }
};




export const getFlightByNumber = async (req, res) => {
  try {
    const flightId = req.params.flightId;
    console.log('Flight ID:', flightId);  // Log the flightId
    const flight = await Flight.findOne({ _id: flightId });
    
    if (!flight) {
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }
    
    res.status(200).json({ success: true, flight });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};



// Controller to handle creating a new flight
export const createFlight = async (req, res, next) => {
  try {
    const newFlight = await Flight.create(req.body);
    res.status(201).json({ success: true, flight: newFlight });
    console.log("flight create",newFlight)
  } catch (error) {
    next(error);
  }
};
export const delayFlight = async (req, res, next) => {
  const { flightNumber } = req.params;

  try {
    const delayedFlight = await Flight.findOneAndUpdate(
      { flightNumber },
      { delayed: true, updatedAt: new Date() }, // set delayed to true
      { new: true }
    );

    if (!delayedFlight) {
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }

    res.status(200).json({ success: true, flight: delayedFlight });
  } catch (error) {
    next(error);
  }
};
export const cancelFlight = async (req, res, next) => {
  const { flightNumber } = req.params;

  try {
    const cancelledFlight = await Flight.findOneAndUpdate(
      { flightNumber },
      { cancelled: true, updatedAt: new Date() }, // set cancelled to true
      { new: true }
    );

    if (!cancelledFlight) {
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }

    res.status(200).json({ success: true, flight: cancelledFlight });
  } catch (error) {
    next(error);
  }
};

// Controller to handle updating a flight by flightNumber
export const updateFlight = async (req, res, next) => {
  const { flightNumber } = req.params;

  try {
    const updatedFlight = await Flight.findOneAndUpdate(
      { flightNumber },
      { ...req.body, updatedAt: new Date() }, // assuming you want to update updatedAt field
      { new: true }
    );

    if (!updatedFlight) {
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }

    res.status(200).json({ success: true, flight: updatedFlight });
  } catch (error) {
    next(error);
  }
};
// flightC.js

// flightC.js

// flightC.js

// flightC.js

export const getFlightById = async (req, res) => {
  const flightId = req.params.id;

  try {
    console.log('Flight ID:', flightId);
    const flight = await FlightModel.findById(flightId);

    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }

    res.json(flight);
  } catch (error) {
    console.error('Error retrieving flight:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






// Controller to handle deleting a flight by flightNumber
export const deleteFlight = async (req, res, next) => {
  const { flightNumber } = req.params;

  try {
    console.log(`Deleting flight with flightNumber: ${flightNumber}`);
    const deletedFlight = await Flight.findOneAndDelete({ flightNumber });

    if (!deletedFlight) {
      console.log(`Flight with flightNumber ${flightNumber} not found`);
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }

    res.status(200).json({ success: true, message: 'Flight deleted successfully' });
  } catch (error) {
    console.error('Error deleting flight:', error);
    next(error);
  }
};

