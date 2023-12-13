import React from "react";
import { Field, Form, Formik } from "formik";
import { Accordion, AccordionSummary, AccordionDetails, Typography , MenuItem} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, TextField } from "@mui/material";

function ChildPassengerDetailAccordion({ title, subtitle, index }) {

  return (
    <div>
      <Accordion style={{ backgroundColor: "white", margin: "10px 0px" }}>
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
              name={`children.${index}.fullName`}
              as={TextField}
              label="Full Name"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name={`children.${index}.age`}
              as={TextField}
              label="Age"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name={`children.${index}.email`}
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
              name={`children.${index}.phone`}
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
      name={`${index}.gender`}
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

export default ChildPassengerDetailAccordion;
