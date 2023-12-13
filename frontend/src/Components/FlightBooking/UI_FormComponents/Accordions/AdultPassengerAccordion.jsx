import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, TextField, MenuItem } from "@mui/material";
import { Field } from "formik"; // Import Field from Formik

function AdultPassengerDetailAccordion({ title, subtitle, index }) {
  return (
    <div>
      <Accordion
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          borderColor: "error.main",
          margin: "10px 0px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="White">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color: "white" }}>
          <Typography color="darkgrey">{subtitle}</Typography>

          <Container style={{ marginTop: "20px", paddingLeft: "0px" }}>
            <Field
              name={`adults.${index}.fullName`}
              as={TextField}
              label="fullName"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Field
              name={`adults.${index}.age`}
              as={TextField}
              label="age"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name={`adults.${index}.email`}
              as={TextField}
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name={`adults.${index}.phone`}
              as={TextField}
              label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name={`adults.${index}.gender`}
              as={TextField}
              label="Gender"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              select
              InputLabelProps={{
                shrink: true,
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Field>
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AdultPassengerDetailAccordion;
