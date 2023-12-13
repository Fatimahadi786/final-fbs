import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography, Paper } from "@mui/material";
import axios from "axios";

const CreateFlightForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    airlineLogo: "",
    company: "",
    origin: "",
    destination: "",
    journeyDate: "",
    returnDate: "",
    journeyAirport: "",
    arrivalAirport: "",
    journeyTime: "",
    arrivalTime: "",
    status: "",
    hour: 0,
    seatEconomy: 0,
    seatBusiness: 0,
    seatAvailabilityEconomy: 0,
    seatAvailabilityBusiness: 0,
    fareAdultEconomy: 0,
    fareInfantEconomy: 0,
    fareChildEconomy: 0,
    fareAdultBusiness: 0,
    fareInfantBusiness: 0,
    fareChildBusiness: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formDataWithFare = {
        ...formData,
        status: "Scheduled",
        fare: {
          economy: {
            adult: formData.fareAdultEconomy || 0,
            infant: formData.fareInfantEconomy || 0,
            child: formData.fareChildEconomy || 0,
          },
          business: {
            adult: formData.fareAdultBusiness || 0,
            infant: formData.fareInfantBusiness || 0,
            child: formData.fareChildBusiness || 0,
          },
        },
      };

      const response = await axios.post("http://localhost:8800/api/flights/", formDataWithFare);

      if (response.data.success) {
        alert("Flight created successfully!");
      } else {
        alert("Failed to create flight. Check the console for details.");
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error creating flight:", error.message);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Flight
        </Typography>
        <form>
          <Grid container spacing={3}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label="ID"
                variant="outlined"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Airline Logo"
                variant="outlined"
                name="airlineLogo"
                value={formData.airlineLogo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company"
                variant="outlined"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Origin"
                variant="outlined"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Destination"
                variant="outlined"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Journey Date"
                variant="outlined"
                name="journeyDate"
                value={formData.journeyDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Return Date"
                variant="outlined"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Journey Airport"
                variant="outlined"
                name="journeyAirport"
                value={formData.journeyAirport}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Arrival Airport"
                variant="outlined"
                name="arrivalAirport"
                value={formData.arrivalAirport}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Journey Time"
                variant="outlined"
                name="journeyTime"
                value={formData.journeyTime}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Arrival Time"
                variant="outlined"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Hour"
                variant="outlined"
                name="hour"
                value={formData.hour}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Economy"
                variant="outlined"
                name="seatEconomy"
                value={formData.seatEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Business"
                variant="outlined"
                name="seatBusiness"
                value={formData.seatBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Availability Economy"
                variant="outlined"
                name="seatAvailabilityEconomy"
                value={formData.seatAvailabilityEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Availability Business"
                variant="outlined"
                name="seatAvailabilityBusiness"
                value={formData.seatAvailabilityBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Adult Economy"
                variant="outlined"
                name="fareAdultEconomy"
                value={formData.fareAdultEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Infant Economy"
                variant="outlined"
                name="fareInfantEconomy"
                value={formData.fareInfantEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Child Economy"
                variant="outlined"
                name="fareChildEconomy"
                value={formData.fareChildEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Adult Business"
                variant="outlined"
                name="fareAdultBusiness"
                value={formData.fareAdultBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Infant Business"
                variant="outlined"
                name="fareInfantBusiness"
                value={formData.fareInfantBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Child Business"
                variant="outlined"
                name="fareChildBusiness"
                value={formData.fareChildBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Status"
                variant="outlined"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateFlightForm;
