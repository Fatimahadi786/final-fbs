import { useFormikContext } from "formik";
import React, { useState } from "react";

// Flight component for booking and canceling tickets
const Flight = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormikContext();
  const customerDetail = formik.values;

  console.log('cust', customerDetail);
  const [isTicketConfirmed, setTicketConfirmed] = useState(false);
  const [isConfirmationMessageVisible, setConfirmationMessageVisible] = useState(false);
  // const [isCancellationMessageVisible, setCancellationMessageVisible] = useState(false);

  const handleTicketConfirmation = () => {
    setTicketConfirmed(true);
    setConfirmationMessageVisible(true);
    // setCancellationMessageVisible(false);
  };

  // const handleTicketCancellation = () => {
  //   setTicketConfirmed(false);
  //   setConfirmationMessageVisible(false);
  //   setCancellationMessageVisible(true);
  // };

  return (
    <div>
      {/* write the confirmation instruction to user */}
      <h2>Booking Confirm/Cancel</h2>
      {isConfirmationMessageVisible && (
        <div>
          <h3>Your ticket is confirmed!</h3>
        </div>
      )}
      {/* {isCancellationMessageVisible && (
        <div>
          <h3>Your ticket is canceled!</h3>
        </div>
      )} */}
      {!isTicketConfirmed ? (
        <div>
          <button onClick={handleTicketConfirmation}>Confirm Ticket</button>
          {/* <button onClick={handleTicketCancellation}> Cancel Ticket</button> */}
        </div>
      ) : null}
    </div>
  );
};

export default Flight;
