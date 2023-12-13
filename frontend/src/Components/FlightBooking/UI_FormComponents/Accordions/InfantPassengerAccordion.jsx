import React from "react";
import { Field, Form, Formik } from "formik";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, TextField } from "@mui/material";

function InfantPassengerDetailAccordion({ title, subtitle, index }) {


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
                    name={`infants.${index}.fullName`}
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
                    name={`infants.${index}.age`}
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
                    name={`infants.${index}.phone`}
                    as={TextField}
                    label="Phone NO"
                    variant="outlined"
                    margin="dense"
                    fullWidth={true}
                    type="ohone"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Container>
              </AccordionDetails>
            </Accordion>
         

    </div>
  );
}

export default InfantPassengerDetailAccordion;
