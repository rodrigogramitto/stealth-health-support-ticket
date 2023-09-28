import react, {useState} from 'react';
import TextArea from '../textArea/TextArea.jsx';

const responsePage = ({ticket}) => {

  // const [responseBody, setResponseBody] = useState('');
  // const [status, setStatus] = useState(''); // Initialize status state

  // const handleStatusChange = (e) => {
  //   e.preventDefault();
  //   setStatus(e.target.value); // Update the status state
  //   updateStatus(e.target.value);
  // };

  // const updateResponseBody = (text) => {
  //   setResponseBody(text);
  // };

  return (
    <div className="response-page">
    <h3 className="font-bold text-lg">{`Ticket Subject: ${ticket.subject}`}</h3>
    {/* <TextArea updateResponseBody={updateResponseBody} responseBody={responseBody} /> */}
    <select className="select select-bordered w-full max-w-xs" onChange={handleStatusChange}>
      <option disabled selected>Ticket Status</option>
      <option>NEW</option>
      <option>IN PROGRESS</option>
      <option>RESOLVED</option>
    </select>
    <div className="modal-action">
      <form>
        <button className="btn">Close</button>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default responsePage;