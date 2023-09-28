import react, {useState} from 'react';
import ResponseModal from '../responseModal/responseModal.jsx';
import TextArea from '../textArea/TextArea.jsx';
import axios from 'axios';

const Ticket = ({ticket, changeView}) => {

  // const [localTicket, setTicket] = useState(ticket);
  const [responseBody, setResponseBody] = useState('');
  const [status, setStatus] = useState(ticket.status); // Initialize status state

  const handleStatusChange = (e) => {
    setStatus(e.target.value); // Update the status state
  };

  const updateResponseBody = (text) => {
    setResponseBody(text);
  };

  const handleClick = (e) => {
    // e.preventDefault();
    console.log(`Would normally send email here with body: Ticket Status: ${status}, `, responseBody);
    ticket.status = status;

    axios.put('http://localhost:3000/ticket', ticket)
      .then((res) => {
        // console.log(res);
        // updateStatus(res);
      })
      .catch((err) => {
        console.error(err);
      });

    axios.post('http://localhost:3000/response', {
      user_email: ticket.email,
      response_body: responseBody,
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    setResponseBody('');
  };

  return (
    <div key={ticket.id} className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <h2>{`Subject: ${ticket.subject}`}</h2>
              <h2>{`Status: ${status.toUpperCase()}`}</h2>
            </div>
            <div className="collapse-content">
              <p>{`Submitter's Name: ${ticket.name}`}</p>
              <p>{`Submitter's Email: ${ticket.email}`}</p>
              <div className="summary-text">
                <p>{`Problem description:`}</p>
                <p>{`${ticket.description}`}</p>
              </div>
              < TextArea updateResponseBody={updateResponseBody} />
                <select className="select select-bordered w-full max-w-xs" onChange={handleStatusChange}>
                  <option disabled selected>Ticket Status</option>
                  <option>NEW</option>
                  <option>IN PROGRESS</option>
                  <option>RESOLVED</option>
                </select>
              <button style={{ background: 'forestgreen' }} onClick={handleClick}>RESOLVE</button>
            </div>
          </div>
  )
};


export default Ticket;