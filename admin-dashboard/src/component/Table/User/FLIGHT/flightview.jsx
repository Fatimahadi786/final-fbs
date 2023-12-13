import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

  function FlightView() {
    const [flight, setFlight] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null); // New state for error handling
    const { flightId } = useParams();
    const navigate = useNavigate();
    const apiUrl = `http://localhost:8800/api/flights/flights/${flightId}`;
  
    useEffect(() => {
      if (flightId) {
        getFlight();
      }
    }, [flightId]);
  
    const getFlight = async () => {
      try {
        const response = await axios.get(apiUrl, { withCredentials: true });
        const flightData = response.data;
        setFlight(flightData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching flight:", error);
        setError("Failed to fetch flight details. Please try again."); // Set the error state
        setLoading(false);
      }
    };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Flight Details</h1>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{flight.flightType}</h2>
          <p>Status: {flight.status}</p>
          <p>ID: {flight._id}</p>
          <p>Departure Airport: {flight.journeyAirport}</p>
          <p>Arrival Airport: {flight.arrivalAirport}</p>
          <p>Departure Time: {flight.journeyTime}</p>
          <p>Arrival Time: {flight.arrivalTime}</p>
          <p>Duration (hours): {flight.hour}</p>
          <p>Price: {flight.price}</p>
         

          {/* Add any other details you want to display */}

          {/* You can also add a button to navigate back to the flight list */}
          <button onClick={() => navigate("/flights")}>Back to Flight List</button>
        </div>
      )}
    </>
  );
}

export default FlightView;

