// FlightEdit.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FlightEdit() {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [editedFlight, setEditedFlight] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/flights/${id}`, { withCredentials: true });
        setFlight(response.data);
        setEditedFlight(response.data); // Initialize the editedFlight state
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlightDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedFlight((prevFlight) => ({
      ...prevFlight,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint for updating flight details
      await axios.put(`http://localhost:8800/api/flights/${id}`, editedFlight, { withCredentials: true });
      console.log('Flight details updated successfully!');
    } catch (error) {
      console.error('Error updating flight details:', error);
    }
  };

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Flight Edit</h2>
      <p>Edit Flight ID: {flight._id}</p>
      <form onSubmit={handleSubmit}>
        <label>Departure Airport:</label>
        <input
          type="text"
          name="journeyAirport"
          value={editedFlight.journeyAirport}
          onChange={handleInputChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default FlightEdit;
