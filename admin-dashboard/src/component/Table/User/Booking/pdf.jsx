import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

function PDF() {
  const [bookingList, setBookingList] = useState([]);
  const [flightList, setFlightList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New state for error handling
  const { id } = useParams();

  const apiUrl = 'http://localhost:8800/api/booking/bookings';

  useEffect(() => {
    getBookings();
  }, [id]);

  const getBookings = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`, {
        withCredentials: true,
      });
      const bookings = response.data;

      if (bookings) {
        setBookingList(bookings.booking);
        setFlightList(bookings.flight);
      } else {
        setBookingList([]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Error fetching bookings. Please try again.'); // Set error state
      setLoading(false);
    }
  };

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render FlightTicket component with data
  return <FlightTicket data={bookingList} flight={flightList} />;
}

function FlightTicket({ data, flight }) {
  // Check if data exists and is not empty
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const {
    _id,
    flightType,
    flightClass,
    flight_id,
    pnrNumber,
    company,
    origin,
    destination,
    journeyDate,
    returnDate,
    journeyTime,
    arrivalTime,
    hour,
    adultFare,
    childFare,
    adults,
    children,
    passengers,
  } = data[0]; // Assuming data is an array with one booking object

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h5">Flight Ticket</Typography>
      <Typography>Flight ID: {flight_id}</Typography>
      <Typography>PNR Number: {_id}</Typography>
      <Typography>Company: {company}</Typography>
      <Typography>Origin: {origin}</Typography>
      <Typography>Destination: {destination}</Typography>
      <Typography>Journey Date: {journeyDate}</Typography>
      <Typography>Journey Time: {journeyTime}</Typography>
      <Typography>Return Date: {returnDate}</Typography>
      <Typography>Arrival Time: {arrivalTime}</Typography>
      <Typography>Duration: {hour} hours</Typography>
      <Typography>Flight Type: {flightType}</Typography>
      <Typography>Flight Class: {flightClass}</Typography>
      <Typography>Adult Fare: ${adultFare}</Typography>
      <Typography>Child Fare: ${childFare}</Typography>
      <Typography>Number of Adults: {adults}</Typography>
      <Typography>Number of Children: {children}</Typography>

      <Typography variant="h6" style={{ marginTop: '10px' }}>
        Passengers:
      </Typography>

      <List>
        {passengers &&
          passengers.map((passenger, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Passenger ${index + 1}`}
                secondary={
                  <>
                    <Typography>Name: {passenger.fullName}</Typography>
                    <Typography>Age: {passenger.age}</Typography>
                    <Typography>Email: {passenger.email}</Typography>
                    <Typography>Phone: {passenger.phone}</Typography>
                    <Typography>Gender: {passenger.gender}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}

export default PDF;
