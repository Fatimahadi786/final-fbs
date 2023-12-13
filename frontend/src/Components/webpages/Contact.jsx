import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import './Contact.css'; // Import the external CSS file

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c58kl1p', 'template_hwczzq4', form.current, 'uCvglKlcIaF7aoNwy')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div className="agency-description">
        <h2>Rinor Travel Agency </h2>
        <p>
          Welcome to our travel agency! We specialize in creating memorable travel experiences.
          Contact us for personalized travel packages tailored to your preferences.
        </p>
        <p>
          <LinkedInIcon className="mail-icon" style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
          LinkedIn: <a
            href="https://www.linkedin.com/in/Rinor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rinor travel agency
          </a>
       

  <WhatsAppIcon  className="whatsapp-icon"  style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
  WhatsApp: <a
    href="https://wa.me/  +92 345 1188394" // Replace with your WhatsApp link
    target="_blank"
    rel="noopener noreferrer"
  >
      +92 345 1188394
  </a>
  <PhoneIcon className="phone-icon" style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
  Contact Number: <a
    href="tel:+923451188394" // Replace with your Pakistani phone number
    target="_blank"
    rel="noopener noreferrer"
  >
    +92 345 1188394
  </a>

 
</p>


      </div>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <TextField
          label="Name"
          type="text"
          name="user_name"
          fullWidth
          required
        />
        <TextField
          label="Email"
          type="email"
          name="user_email"
          fullWidth
          required
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send Email
        </Button>
      </form>
    </div>
  );
};
