import React, { useState } from "react";
import { Paper, } from '@mui/material';
import { Grid, TextField, Typography, Button, MenuItem, Select } from "@mui/material";
import { useFormikContext, Field, ErrorMessage } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';
import './BookingInfo.css';

import { CiCircleRemove } from 'react-icons/ci'


// import images'
import EASYPAISA from '../../../Images/easypaisa.png'
import BANK from '../../../Images/bnk.png'



const BookingInfo = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormikContext();
  const [oneWayTrip, setOneWayTrip] = useState(true);
  const [cities, setCities] = useState([{ to: "", from: "", departureDate: "" }]);
  const [flightType, setFlightType] = useState("oneWay");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [openOption, setOpenOption] = useState(false);
  const [flightClass, setFlightClass] = useState('Economy');
  const [paymentMethod, setPaymentMethod] = useState('EasyPaisa');
  const [originValue, setOriginValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");


  function handleFlightType(value) {
    if (value === "oneWay") {
      setOneWayTrip(true);
    } else if (value === "roundWay") {
      setOneWayTrip(false);
    } else if (value === "multicity") {
      setOneWayTrip(false);
    }
    setFlightType(value);
  }

  const handleAddCity = () => {
    setCities([...cities, { to: "", from: "", departureDate: "" }]);
  }
  const handleRemoveCity = (cityIndex) => {
    // Define the logic to remove a city from your 'cities' state or data
    // For example, if 'cities' is an array of city objects, you can remove a city like this:
    const updatedCities = cities.filter((city, index) => index !== cityIndex);
    setCities(updatedCities);
  }
  const handleAdultChange = (value) => {
    if (adults + value >= 0) {
      setAdults(adults + value);
    }
  };

  const handleChildrenChange = (value) => {
    if (children + value >= 0) {
      setChildren(children + value);
    }
  };

  const handleInfantChange = (value) => {
    if (infants + value >= 0) {
      setInfants(infants + value);
    }
  };
  const handleInputChange = () => {
    setOpenOption(!openOption);
  };
  const handleFlightClassChange = (event) => {
    setFlightClass(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBookingSubmit = () => {
    // Combine existing form data with new data captured in BookingInfo component
    const newData = {
      // Include the necessary fields from the BookingInfo component
      oneWayTrip,
      cities,
      flightType,
      adults,
      children,
      infants,
      openOption,
      flightClass,
      paymentMethod,
      originValue,
      destinationValue,
    };
    // Update the form data using the provided function
    updateFormData(newData);

    // Proceed to the next step in the multi-step form
    nextStep();
  };


  // console.log("Booking Info", formik.values);

  return (
    <>
      <div className="booking">
        <Typography variant="h6" gutterBottom>
          Booking Details
        </Typography>

        <FormControl className="formcontrol">
          <RadioGroup
            row
            aria-label="row-radio-buttons-group"
            name="row-radio-buttons-group"
            onChange={(e) => {
              formik.handleChange(e);
              handleFlightType(e.target.value);
            }}
            value={formik.values["row-radio-buttons-group"]}
            className="mb-3"
          >
            <FormControlLabel
              value="oneWay"
              control={<Radio />}
              label="One Way Trip"
            />
            <FormControlLabel
              value="roundWay"
              control={<Radio />}
              label="Round Way Trip"
            />
          </RadioGroup>
        </FormControl>
        <br></br>
        <hr />
        <br></br>
        {flightType === "multicity" && cities.map((city, index) => (
          <div key={index} className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Field
              name={`city${index}.to`}
              as={TextField}
              label={`To`}
              variant="outlined"
              fullWidth
            />
            <Field
              name={`city${index}.from`}
              as={TextField}
              label={`From`}
              variant="outlined"
              fullWidth
            />
            <Field
              name={`city${index}.departureDate`}
              as={TextField}
              label={`Departure Date`}
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: "2023-11-08", // Set the minimum date to November 8, 2023
              }}
            />

            <CiCircleRemove className="IconDiv" variant="outlined" onClick={() => handleRemoveCity(index)} />

          </div>
        ))}
        {flightType === "multicity" && (
          <Button variant="outlined" onClick={handleAddCity} className="flightbtn">
            Add Flight
          </Button>
        )}

        {flightType !== "multicity" && (
          <Grid container spacing={3}>
            <Grid item xs={3} className="mb-3">
              <Field
                name="origin"
                as={TextField}
                label="From"
                variant="outlined"
                fullWidth
                onChange={(e) => setOriginValue(e.target.value)}

              />
              <ErrorMessage name="origin" component="div" className="text-danger" />
            </Grid>
            <Grid item xs={3} className="mb-3">
              <Field
                name="destination"
                as={TextField}
                label="Destination"
                variant="outlined"
                fullWidth
                onChange={(e) => setDestinationValue(e.target.value)}

              />
              <ErrorMessage name="destination" component="div" className="text-danger" />
            </Grid>
            <Grid item xs={3} className="mb-3">
              <Field
                name="journeyDate"
                as={TextField}
                label="Journey Date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: "2023-11-29", // Set the minimum date to November 8, 2023
                }}
              />
              <ErrorMessage name="journeyDate" component="div" className="text-danger" />
            </Grid>
            <Grid item xs={3} className="mb-3">
              <Field
                name="returnDate"
                as={TextField}
                label="Return Date"
                type="date"
                disabled={oneWayTrip}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: "2023-11-27", // Set the minimum date to November 8, 2023
                }}
              />
              <ErrorMessage name="returnDate" component="div" className="text-danger" />
            </Grid>
          </Grid>
        )}
        <br></br>
        {/* <hr/> */}
        <br></br>

        <div className="abccontainer">
          <FormControl className="selectContainer">
            <Select
              name="guestForm" // Set the name attribute to match the form field name
              label="add passenger"
              variant="outlined"
              placeholder="add passenger"
              fullWidth
              className="select"
            >
              <MenuItem className="guestType">
                <Typography>Adults:</Typography>
                <Box className="counter">
                  <Button
                    className="button"
                    disabled={adults === 0}
                    onClick={() => setAdults(adults - 1)}
                  // onClick={() => formik.setFieldValue("number_of_adults", formik.values.number_of_adults - 1)}
                  >
                    -
                  </Button>
                  <Typography className="count">{adults}</Typography>
                  <Button
                    className="button"
                    onClick={() => setAdults(adults + 1)}

                  // onClick={() => formik.setFieldValue("number_of_adults", formik.values.number_of_adults + 1)}
                  >
                    +
                  </Button>
                </Box>
              </MenuItem>
              <MenuItem className="guestType">
                <Typography>Children:</Typography>
                <Box className="counter">
                  <Button
                    className="button"
                    disabled={children === 0}
                    onClick={() => setChildren(children - 1)}
                  // onClick={() => formik.setFieldValue("number_of_children", formik.values.number_of_children - 1)}
                  >
                    -
                  </Button>
                  <Typography className="count">{children}</Typography>
                  <Button
                    className="button"
                    onClick={() => setChildren(children + 1)}          >
                    +
                  </Button>
                </Box>
              </MenuItem>
              <MenuItem className="guestType">
                <Typography>Infants:</Typography>
                <Box className="counter">
                  <Button
                    className="button"
                    disabled={infants === 0}
                    onClick={() => setInfants(infants - 1)}
                  // onClick={() => formik.setFieldValue("number_of_infants", formik.values.number_of_infants - 1)}
                  >
                    -
                  </Button>
                  <Typography className="count">{infants}</Typography>
                  <Button
                    className="button"
                    onClick={() => setInfants(infants + 1)}
                  // onClick={() => formik.setFieldValue("number_of_infants", formik.values.number_of_infants + 1)}
                  >
                    +
                  </Button>
                </Box>
              </MenuItem>
            </Select>
            <Button className="button" onClick={handleBookingSubmit}>test</Button>
          </FormControl>
        </div>


      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>

    </>
  );
};

export default BookingInfo;
