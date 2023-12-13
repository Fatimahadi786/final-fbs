// FlightModel.js
class FlightModel {
    constructor() {
      this.mobileNumber = '';
      this.email = '';
      this.status = ''; // 'cancel' or 'delay'
    }
  
    setMobileNumber(number) {
      this.mobileNumber = number;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setStatus(status) {
      this.status = status;
    }
  }
  
  export default FlightModel;
  