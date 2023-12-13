import React, { useState } from 'react';
import BookingInfo from './BookingInfo';
import PassengerInfo from './PassengerInfo';
import ReviewBooking from './ReviewBooking';
import Flight from './ConfirmOrCancelBooking';
import Checkout from './Checkout';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <BookingInfo
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <PassengerInfo
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <ReviewBooking
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Flight
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Checkout
          formData={formData}
          updateFormData={updateFormData}
          prevStep={prevStep}
        />
      );
    default:
      return null;
  }
};

export default MultiStepForm;
