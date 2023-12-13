import { Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import AdultPassengerForm from "../Forms/AdultPassengerForm";
import ChildPassengerForm from "../Forms/ChildPassengerForm";
import InfantPassengerForm from "../Forms/InfantPassengerForm";
import * as Yup from 'yup';

const PassengerInfo = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormikContext();

  const {adults,children,infants } = formData;
  console.log("Passenger Info", formData)
  console.log("dataii", formik.values)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Passenger Information
      </Typography>

      <AdultPassengerForm
        formik={formik}
        number_of_adults={adults}
      />
      <ChildPassengerForm
        formik={formik}
        number_of_children={children}
      />
      <InfantPassengerForm
        formik={formik}
        number_of_infants={infants}
      />
    </React.Fragment>
  );
};

export default PassengerInfo;
