// ReviewBooking.jsx

import React, { useMemo } from "react";
import { useFormikContext } from "formik";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import "./ReviewBooking.css";

const ReviewBooking = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormikContext();
  const adultFields = formik.values.adults;
  const childrenFields = formik.values.children;

  console.log('updateFormData', formData);

  // Destructure formik values
  const {
    origin,
    destination,
    journeyDate,
   
  } = formik.values;

  // Destructure formData
  const { adults, children ,airline,cabin, adultFare,
    childFare,} = formData;

  // Calculate fares
  const totalAdultFare = useMemo(() => adults * adultFare, [adults, adultFare]);
  const totalChildrenFare = useMemo(() => children * childFare, [children, childFare]);

  const totalAmount = useMemo(
    () => Number.parseInt(totalAdultFare) + Number.parseInt(totalChildrenFare)
  );

  return (
    <Card className="review-card">
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
            <h1>Booking Review</h1>
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
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Airline</TableCell>
                <TableCell>{airline}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cabin</TableCell>
                <TableCell>{cabin}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Passenger</TableCell>
                <TableCell>FullName</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adultFields &&
                adultFields.map((field, index) => (
                  <TableRow key={index}>
                    <TableCell>Adult {index + 1}</TableCell>
                    <TableCell>{field && field.fullName}</TableCell>
                    <TableCell>{field && field.age}</TableCell>
                    <TableCell>{field && field.email}</TableCell>
                    <TableCell>{field && field.phone}</TableCell>
                    <TableCell>{field && field.gender}</TableCell>
                  </TableRow>
                ))}
              {childrenFields &&
                childrenFields.map((field, index) => (
                  <TableRow key={index}>
                    <TableCell>Child {index + 1}</TableCell>
                    <TableCell>{field && field.fullName}</TableCell>
                    <TableCell>{field && field.age}</TableCell>
                    <TableCell>{field && field.email}</TableCell>
                    <TableCell>{field && field.phone}</TableCell>
                    <TableCell>{field && field.gender}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Total Adult Fare</TableCell>
                <TableCell>
                  {isNaN(totalAdultFare) ? "" : totalAdultFare}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Children Fare</TableCell>
                <TableCell>
                  {isNaN(totalChildrenFare) ? "" : totalChildrenFare}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Grand Total</TableCell>
                <TableCell>{totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ReviewBooking;
