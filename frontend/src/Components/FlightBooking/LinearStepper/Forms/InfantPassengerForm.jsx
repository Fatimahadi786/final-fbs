import React from "react";
import { FieldArray, useFormikContext } from "formik";
import InfantPassengerDetailAccordion from "../../UI_FormComponents/Accordions/InfantPassengerAccordion";

function InfantPassengerForm({ number_of_infants }) {
  const formik = useFormikContext(); // Access formik context

  return (
    <React.Fragment>
      <FieldArray name="infant">
        {() => (
          <>
            {Array.from({ length: number_of_infants }).map((_, index) => (
              <InfantPassengerDetailAccordion
                key={index}
                title={
                  <span style={{ color: 'black' }}>{`infant${index + 1}`}</span>
                }
                subtitle={`Enter the details of the passenger.`}
                index={index}
                formik={formik} // Pass the formik context to the accordion
              />
            ))}
          </>
        )}
      </FieldArray>
    </React.Fragment>
  );
}

export default InfantPassengerForm;
