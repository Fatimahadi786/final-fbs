// ViewFlight.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewFlight() {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/flights/${id}`, { withCredentials: true });
        setFlight(response.data);
      } catch (error) {
        console.error('Error fetching flight details:', error);
        setError(error);
      }
    };

    fetchFlightDetails();
  }, [id]);

  if (error) {
    return <div>Error fetching flight details: {error.message}</div>;
  }

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Flight View</h2>
      <p>Flight ID: {flight._id}</p>
      <p>Departure Airport: {flight.journeyAirport}</p>
      {/* Add more flight details as needed */}
    </div>
  );
}

export default ViewFlight;
