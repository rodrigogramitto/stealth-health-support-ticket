import react, {useState} from 'react';
import ResponseModal from '../responseModal/responseModal.jsx';

const Ticket = ({ticket}) => {

  const [status, setStatus] = useState(ticket.status);

  const updateStatus = (s) => {
    setStatus(s);
  }

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
              <ResponseModal ticket={ticket} updateStatus={updateStatus} />
            </div>
          </div>
  )
};


export default Ticket;