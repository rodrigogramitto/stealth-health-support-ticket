import react, {useState} from 'react';
import TextArea from '../textArea/TextArea.jsx';
import axios from 'axios';

const ResponseModal = ({ ticket, updateStatus }) => {

const [ticketStatus, setTicketStatus] = useState('');
const [responseBody, setResponseBody] = useState('');

const handleStatusChange = (e) => {
  setTicketStatus(e.target.value);
  updateStatus(e.target.value);
};

const updateResponseBody = (text) => {
  setResponseBody(text);
}
console.log(ticket);

const submitResponse = (e) => {
  console.log(`Would normally send email here with body: Ticket Status: ${ticketStatus}, `, responseBody );
  ticket.status = ticketStatus;
  axios.put('http://localhost:3000/ticket', ticket)
    .then((res) => {
      console.log(res);
      // updateStatus(res);
    })
    .catch((err) => {
      console.error(err);
    })
  // axios.post('http://localhost:3000/response', {
  //   user_email: ticket.email,
  //   response_body: responseBody
  // })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
    setResponseBody('');
}

  return (
    <>
    <button className="modal-btn btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>RESOLVE</button>
      <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{`Ticket Subject: ${ticket.subject}`}</h3>
        <TextArea updateResponseBody={updateResponseBody} responseBody={responseBody} />
          <select className="select select-bordered w-full max-w-xs" onChange={handleStatusChange}>
            <option disabled selected>Ticket Status</option>
            <option>NEW</option>
            <option>IN PROGRESS</option>
            <option>RESOLVED</option>
          </select>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
            <button className="btn" onClick={submitResponse}>Submit</button>
          </form>
        </div>
      </div>
    </dialog>
    </>

  )
};

export default ResponseModal;