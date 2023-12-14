
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './pdf.css';
import PIALogo from "./pia.jpg";
import Rinor  from './LOGO2.png';
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
  const [error, setError] = useState(null);
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
      setError('Error fetching bookings. Please try again.');
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <FlightTicket data={bookingList} flight={flightList} />;
}

function FlightTicket({ data, flight }) {
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
  } = data;
  const totalAdultFare = adultFare * adults;
  const totalChildFare = childFare * children;
  const totalFare = totalAdultFare + totalChildFare;


  return (
    <Paper elevation={3} className="flight-ticket">
      <div className="letterhead">
        <img src={Rinor} alt="PIA Logo" />
        <div>
          <Typography variant="h6">{company}</Typography>
          <Typography className="route"><h6>{origin} to {destination}</h6></Typography>
        </div>
        
      </div>
      <p>"Dear valued passenger, welcome aboard! We are delighted to have you on our flight. Sit back, relax, and enjoy a pleasant journey with us. Thank you for choosing our airline. Safe travels!"</p>
      <div className="ticket-info">
  <table className="flight-info-table">
    <tbody>
      <tr>
        <th>Flight ID</th>
        <td>{flight_id}</td>
      </tr>
      <tr>
        <th>PNR Number</th>
        <td>{_id}</td>
      </tr>
      <tr>
        <th>Journey Date</th>
        <td>{journeyDate}</td>
      </tr>
      <tr>
        <th>Journey Time</th>
        <td>{journeyTime}</td>
      </tr>
      <tr>
        <th>Arrival Time</th>
        <td>{arrivalTime}</td>
      </tr>
      <tr>
        <th>Duration</th>
        <td>{hour} hours</td>
      </tr>
      <tr>
        <th>Flight Type</th>
        <td>{flightType}</td>
      </tr>
      <tr>
        <th>Flight Class</th>
        <td>{flightClass}</td>
      </tr>
      <tr>
              <th>Total Adult Fare</th>
              <td>{totalAdultFare}</td>
            </tr>
            <tr>
              <th>Total Child Fare</th>
              <td>{totalChildFare}</td>
            </tr>
            <tr>
              <th>Total Fare</th>
              <td>{totalFare}</td>
            </tr>
    </tbody>
  </table>
</div>

<Typography variant="h6" style={{ marginTop: '10px' }}>
  Passengers:
</Typography>

<div className="passenger-list">
  {passengers && passengers.length > 0 && (
    <table className="passenger-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {passengers.map((passenger, index) => (
          <tr key={index}>
            <td>{passenger.fullName}</td>
            <td>{passenger.age}</td>
            <td>{passenger.email}</td>
            <td>{passenger.phone}</td>
            <td>{passenger.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
  {(!passengers || passengers.length === 0) && <div>No passenger data available</div>}
</div>
<br></br>

<p><b>Rinor Traval Agency</b><br></br>
Terms & Conditions<br></br>

Dear Valued Customer,<br></br>

Thank you for choosing [Rinor Traval Agency]. Please be advised of our cancellation policy. In the event of a cancellation, a 30% deduction will be applied to cover processing fees. We appreciate your understanding and look forward to serving you on your next journey.

Safe travels,
<br></br>
<b>[Rinor Team]</b></p>
    </Paper>
  );
  
}

export default PDF;
