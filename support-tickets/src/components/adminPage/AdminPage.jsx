import react, {useEffect, useState} from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tickets')
    .then((res) => {
      setTickets(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  const renderTickets = () => {
    if (tickets) {
      return tickets.map((ticket) => {
        console.log(ticket);
        return (
          <div key={ticket.id} className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              {ticket.subject}
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        );
      });
    }
    // Return null or an empty array if there are no tickets
    return null;
  };

  return (
    <div id="ticket-list">
      <h1 className="ticket-list-title">All tickets</h1>
        {renderTickets()}
    </ div>

  )
};

export default AdminPage;