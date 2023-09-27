import react, { useState } from 'react';
import axios from 'axios';

const SubmitButton = ({ name, email, subject, description, changeView}) => {

  const submitTicket = (e) => {

    const newTicket = {
      name: name,
      email: email,
      subject: subject,
      status: 'New',
      description: description
    }

    console.log('Would normally send email here with body: NEW TICKET', newTicket)

    axios.post('http://localhost:3000/ticket', newTicket)
    .then(() => {
      changeView(1)
    })
    .catch((err) => {
      console.error(err);
    })

  }

  return (
    <button className="btn" onClick={submitTicket}>Submit Ticket</button>
  )
}

export default SubmitButton;