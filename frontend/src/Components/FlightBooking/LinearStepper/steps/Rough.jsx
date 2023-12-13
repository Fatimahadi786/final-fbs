import React, { useEffect, useMemo, useState } from "react";
import { Field, useFormikContext } from "formik";
import {
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ReviewBooking = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormikContext();

  // Ensure that passengers are initialized as an empty array
  const passengers = formData.passengers || [];

  const {
    flightlogo,
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
  } = formData;

  const totalAdultFare = useMemo(() => adults * adultFare, [adults, adultFare]);
  const totalChildrenFare = useMemo(() => children * childFare, [children, childFare]);
  const totalAmount = useMemo(() => Number.parseInt(totalAdultFare) + Number.parseInt(totalChildrenFare), [totalAdultFare, totalChildrenFare]);

  
  return (
    <>
      <React.Fragment>
        <Typography variant="h6" align="center" gutterBottom>
          1 Booking Information Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
          <TableRow>
              <TableCell>Flight LOGO</TableCell>
              <TableCell>{flightlogo}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Flight Type</TableCell>
              <TableCell>{flightType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Flight Class</TableCell>
              <TableCell>{flightClass}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Flight ID</TableCell>
              <TableCell>{flight_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PNR Number</TableCell>
              <TableCell>{pnrNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>{company}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Origin</TableCell>
              <TableCell>{origin}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Destination</TableCell>
              <TableCell>{destination}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Journey Date</TableCell>
              <TableCell>{journeyDate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Return Date</TableCell>
              <TableCell>{returnDate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Journey Time</TableCell>
              <TableCell>{journeyTime}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Arrival Time</TableCell>
              <TableCell>{arrivalTime}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell>{hour}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Adult Fare</TableCell>
              <TableCell>{adultFare}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Child Fare</TableCell>
              <TableCell>{childFare}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number of Adults</TableCell>
              <TableCell>{adults}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number of Children</TableCell>
              <TableCell>{children}</TableCell>
            </TableRow>
            {passengers.map((passenger, index) => (
  <TableRow key={index}>
    <TableCell>{`Passenger ${index + 1}`}</TableCell>
    <TableCell>{passenger.fullName}</TableCell>
    <TableCell>{passenger.age}</TableCell>
    <TableCell>{passenger.email}</TableCell>
    <TableCell>{passenger.phone}</TableCell>
    <TableCell>{passenger.gender}</TableCell>
    {/* Include other passenger details as needed */}
  </TableRow>
))}


            <TableBody>
              <TableRow>
                <TableCell>Total Adult Fare</TableCell>
                <TableCell>{isNaN(totalAdultFare) ? "" : totalAdultFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Children Fare</TableCell>
                <TableCell>{isNaN(totalChildrenFare) ? "" : totalChildrenFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Grand Total</TableCell>
                <TableCell>{totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Grid>
          <Field
            name="pnrNumber"
            render={({ field }) => (
              <TableRow>
                <TableCell>PNR Number</TableCell>
                <TableCell>
                  <TextField
                    label="PNR Number"
                    variant="outlined"
                    fullWidth={true}
                    {...field}
                  />
                </TableCell>
              </TableRow>
            )}
          />
        </Grid>
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;
