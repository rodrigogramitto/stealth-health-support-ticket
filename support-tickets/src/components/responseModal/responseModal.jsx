import React, { useState } from 'react';
import TextArea from '../textArea/TextArea.jsx';
import axios from 'axios';

const ResponseModal = ({ localTicket, updateStatus }) => {
  const [responseBody, setResponseBody] = useState('');
  const [status, setStatus] = useState(''); // Initialize status state

  const handleStatusChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value); // Update the status state
    updateStatus(e.target.value);
  };

  const updateResponseBody = (text) => {
    setResponseBody(text);
  };

  const submitResponse = (e) => {
    e.preventDefault();
    console.log(`Would normally send email here with body: Ticket Status: ${status}, `, responseBody);
    localTicket.status = status;

    axios.put('http://localhost:3000/ticket', localTicket)
      .then((res) => {
        console.log(res);
        // updateStatus(res);
      })
      .catch((err) => {
        console.error(err);
      });

    axios.post('http://localhost:3000/response', {
      user_email: localTicket.email,
      response_body: responseBody,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    setResponseBody('');
    // Close the modal after submitting
    document.getElementById(`modal_${localTicket.id}`).close();
  };

  return (
    <>
      <button className="modal-btn btn" onClick={() => document.getElementById(`modal_${localTicket.id}`).showModal()}>RESOLVE</button>
      <dialog id={`modal_${localTicket.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{`Ticket Subject: ${localTicket.subject}`}</h3>
          <TextArea updateResponseBody={updateResponseBody} responseBody={responseBody} />
          <select className="select select-bordered w-full max-w-xs" onChange={handleStatusChange}>
            <option disabled selected>Ticket Status</option>
            <option>NEW</option>
            <option>IN PROGRESS</option>
            <option>RESOLVED</option>
          </select>
          <div className="modal-action">
            <form onSubmit={submitResponse} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              <button className="btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ResponseModal;
