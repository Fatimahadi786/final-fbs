// FlightController.js
import FlightModel from './FlightModel';

class FlightController {
  constructor() {
    this.model = new FlightModel();
  }

  setMobileNumber(number) {
    this.model.setMobileNumber(number);
  }

  setEmail(email) {
    this.model.setEmail(email);
  }

  setStatus(status) {
    this.model.setStatus(status);
  }

  sendNotification() {
    // Simulate sending notifications
    const { mobileNumber, email, status } = this.model;
    console.log(`Sending notification to ${mobileNumber} and ${email} about the ${status} status.`);
  }
}

export default FlightController;
