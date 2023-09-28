import react, {useEffect, useState} from 'react';
import axios from 'axios';
import ResponseModal from '../responseModal/responseModal.jsx';
import Ticket from '../ticket/ticket.jsx';

const AdminPage = ({ changeView }) => {
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

  const updateTickets = () => {
    axios.get('http://localhost:3000/tickets')
    .then((res) => {
      setTickets(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const renderTickets = () => {
    if (tickets) {
      return tickets.map((ticket) => {
        return (<Ticket key={ticket.id} ticket={ticket} updateTickets={updateTickets} />);
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