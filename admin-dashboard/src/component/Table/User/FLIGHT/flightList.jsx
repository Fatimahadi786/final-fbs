import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function FlightList() {
  const [flights, setFlights] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const apiUrl = "http://localhost:8800/api/flights/flights";

  useEffect(() => {
    // Try to get flights from local storage on component mount
    const storedFlights = JSON.parse(localStorage.getItem("flights"));
    if (storedFlights) {
      setFlights(storedFlights);
      setLoading(false);
    } else {
      getFlights();
    }
  }, []);

  const getFlights = async () => {
    try {
      const response = await axios.get(apiUrl, { withCredentials: true });
      const flightData = response.data;

      if (Array.isArray(flightData.flights)) {
        setFlights(flightData.flights);

        // Save flights to local storage after fetching
        localStorage.setItem("flights", JSON.stringify(flightData.flights));
      } else {
        setFlights([]);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };
  const getRowId = (row) => row._id;
  const handleViewClick = (id) => {
    navigate(`/portal/flight-view/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/portal/flight-edit/${id}`);
  };

  const getStatusIndicator = (flight) => {
    const currentTime = new Date();
    const departureTime = new Date(flight.journeyTime);
    const arrivalTime = new Date(flight.arrivalTime);
  
    if (flight.cancelled) {
      return { status: "Cancelled", color: "red" };
    } else if (flight.delayed) {
      return { status: "Delayed", color: "orange" };
    } else if (currentTime < departureTime) {
      return { status: "Scheduled", color: "blue" };
    } else if (currentTime >= departureTime && currentTime < arrivalTime) {
      return { status: "In Progress", color: "green" };
    } else {
      return { status: "Completed", color: "gray" };
    }
  };
  

  const handleDeleteClick = async (id) => {
    try {
      // Send a DELETE request to the server
      await axios.delete(`http://localhost:8800/api/flights/flights/${id}`, {
        withCredentials: true,
      });

      // Update the state to remove the deleted flight
      setFlights((prevFlights) =>
        prevFlights.filter((flight) => flight._id !== id)
      );

      console.log(`Flight with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting flight with ID ${id}:`, error);
    }
  };
  const handleDelayClick = async (id) => {
    try {
      // Make the delay request
      await axios.put(`http://localhost:8800/api/flights/flights/${id}/delay`, null, {
        withCredentials: true,
      });

      // Update the flight status locally
      setFlights((prevFlights) =>
        prevFlights.map((flight) =>
          flight._id === id ? { ...flight, delayed: true } : flight
        )
      );

      alert("Flight delayed successfully!");
    } catch (error) {
      console.error(`Error delaying flight with ID ${id}:`, error);
      alert("Failed to delay flight. Check the console for details.");
    }
  };

  const handleCancelClick = async (id) => {
    try {
      // Make the cancel request
      await axios.put(`http://localhost:8800/api/flights/flights/${id}/cancel`, null, {
        withCredentials: true,
      });

      // Update the flight status locally
      setFlights((prevFlights) =>
        prevFlights.map((flight) =>
          flight._id === id ? { ...flight, cancelled: true } : flight
        )
      );

      alert("Flight canceled successfully!");
    } catch (error) {
      console.error(`Error canceling flight with ID ${id}:`, error);
      alert("Failed to cancel flight. Check the console for details.");
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "journeyAirport", headerName: "Departure Airport", flex: 1 },
    { field: "arrivalAirport", headerName: "Arrival Airport", flex: 1 },
    // { field: "journeyTime", headerName: "Departure Time", flex: 1 },
    // { field: "arrivalTime", headerName: "Arrival Time", flex: 1 },
    // { field: "hour", headerName: "Duration (hours)", flex: 1 },
    // { field: "airlineLogo", headerName: "Airline Logo", flex: 1 },
    // { field: "company", headerName: "Company", flex: 1 },
    // { field: "origin", headerName: "Origin", flex: 1 },
    // { field: "destination", headerName: "Destination", flex: 1 },
    // { field: "returnDate", headerName: "Return Date", flex: 1 },
    // { field: "journeyDate", headerName: "Journey Date", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300, // Increase the width to accommodate all buttons
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => handleViewClick(params.row._id)}>View</button>
          <button onClick={() => handleEditClick(params.row._id)}>Edit</button>
          <button onClick={() => handleDeleteClick(params.row._id)}>Delete</button>
          <button onClick={() => handleDelayClick(params.row._id)}>Delay</button>
          <button onClick={() => handleCancelClick(params.row._id)}>Cancel</button>
      </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const statusInfo = getStatusIndicator(params.row);
        return (
          <div style={{ color: statusInfo.color, fontWeight: "bold" }}>
            {statusInfo.status}
            {params.row.delayed && (
              <span style={{ color: "orange", marginLeft: "8px" }}></span>
            )}
            {params.row.cancelled && (
              <span style={{ color: "red", marginLeft: "8px" }}></span>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Flight List</h1>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={flights}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId}
        />
      </div>
    </>
  );
}

export default FlightList;