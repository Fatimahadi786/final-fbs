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
  const adultFields = formik.values.adults;
  const childrenFields = formik.values.children;
  const infantFields = formik.values.infants;
  console.log('Adult Fields:', adultFields);
  console.log('Children Fields:', childrenFields);
  console.log('Infant Fields:', infantFields);
  console.log('updateFormDataupdateFormData' ,formData)
const {
  origin,
  destination,
  journeyDate,
  returnDate,
  salesCommission,
  taxes,
  discount,
} = formik.values;
  const {

    adults,
    children,
    infants,
    airline,
    code,
    cabin,
    adultFare,
    childFare,
    infantFare,
  } =formData;
  

  const totalAdultFare = useMemo(()=> adults * adultFare , [adults,adultFare]);
  const totalChildrenFare = useMemo(()=> children * childFare , [children,childFare]);
  const totalInfantFare = useMemo(()=> infants * infantFare , [infants,infantFare]);

  const totalAmount = useMemo(()=> Number.parseInt(totalAdultFare) + Number.parseInt(totalChildrenFare) , [totalAdultFare ,totalAdultFare,totalInfantFare] )
  console.log('totalAmounttotalAmoun  t' ,totalAdultFare, totalChildrenFare ,totalInfantFare)
  return (
    <>
      <React.Fragment>
        <Typography variant="h6" align="center" gutterBottom>
          1 Booking Information Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
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
              {/* <TableRow>
                <TableCell>Number of Adults</TableCell>
                <TableCell>{adults}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number of Children</TableCell>
                <TableCell>{children}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number of Infants</TableCell>
                <TableCell>{infants}</TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" align="center" gutterBottom>
          2 Flight Information Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Airline</TableCell>
                <TableCell>{airline}</TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell>Code</TableCell>
                <TableCell>{code}</TableCell>
              </TableRow> */}
              <TableRow>
                <TableCell>Cabin</TableCell>
                <TableCell>{cabin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Adult Fare</TableCell>
                <TableCell>{totalAdultFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Children Fare</TableCell>
                <TableCell>{totalChildrenFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Infant Fare</TableCell>
                <TableCell>{totalInfantFare}</TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell>Sales Commission</TableCell>
                <TableCell>{salesCommission}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Taxes</TableCell>
                <TableCell>{taxes}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Discount</TableCell>
                <TableCell>{discount}</TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>


<Typography variant="h6" align="center" gutterBottom>
  3 Passenger Details
</Typography>
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
      {adultFields && adultFields.map((field, index) => (
        <TableRow key={index}>
          <TableCell>Adult {index + 1}</TableCell>
          <TableCell>{field && field.fullName}</TableCell>
          <TableCell>{field && field.age}</TableCell>
          <TableCell>{field && field.email}</TableCell>
          <TableCell>{field && field.phone}</TableCell>
          <TableCell>{field && field.gender}</TableCell>
        </TableRow>
      ))}
      {childrenFields && childrenFields.map((field, index) => (
        <TableRow key={index}>
          <TableCell>Child {index + 1}</TableCell>
          <TableCell>{field && field.fullName}</TableCell>
          <TableCell>{field && field.age}</TableCell>
          <TableCell>{field && field.email}</TableCell>
          <TableCell>{field && field.phone}</TableCell>
          <TableCell>{field && field.gender}</TableCell>
        </TableRow>
      ))}
      {infantFields && infantFields.map((field, index) => (
        <TableRow key={index}>
          <TableCell>Infant {index + 1}</TableCell>
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



        <Typography variant="h6" align="center" gutterBottom>
          4 Fares Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Total Adult Fare</TableCell>
                <TableCell>{isNaN(totalAdultFare) ? "" : totalAdultFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Children Fare</TableCell>
                <TableCell>
                  {isNaN(totalChildrenFare) ? "" : totalChildrenFare}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Infant Fare</TableCell>
                <TableCell>{isNaN(totalInfantFare) ? "" : totalInfantFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Grand Total</TableCell>
                <TableCell>{totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* <Grid>
          <Field
            name="pnrNumber"
            render={({ field }) => (
              <TextField
                label="PNR Number"
                variant="outlined"
                fullWidth={true}
                {...field.id}
              />
            )}
          />
        </Grid> */}
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;