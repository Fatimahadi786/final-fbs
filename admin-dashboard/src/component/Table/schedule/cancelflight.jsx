import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function EmailNotification() {
  const [receiverEmail, setReceiverEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const containerStyle = {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '800px',
    backgroundColor: '#f4f4f4',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
  };

  const textareaStyle = {
    width: '100%',
    marginTop: '10px',
  };

  const buttonStyle = {
    marginTop: '15px',
  };

  const sendEmail = async () => {
    try {
      if (!receiverEmail || !subject || !message) {
        console.error('Invalid email, subject, or message content');
        return;
      }

      const response = await fetch('http://localhost:8800/api/email/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: receiverEmail,
          subject: subject,
          message: message,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        alert('Email sent successfully!');
      } else {
        console.error('Failed to send email:', response.statusText);
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
      alert('Error sending email');
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Email Notification</h1>
      <TextField
        label="Receiver's Email Address"
        type="email"
        value={receiverEmail}
        onChange={(e) => setReceiverEmail(e.target.value)}
        style={inputStyle}
      />
      <TextField
        label="Subject"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={inputStyle}
      />
      <TextareaAutosize
        minRows={3}
        placeholder="Email Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={textareaStyle}
      />
      <Button variant="contained" onClick={sendEmail} style={buttonStyle}>
        Send Email Notification
      </Button>
    </div>
  );
}

export default EmailNotification;
