import Ticket from '../models/ticket.js';
import Response from '../models/response.js';

const Controller = {
  saveTicket: async (ticket) => {
    try {
      const savedTicket = await Ticket.create(ticket);
      return savedTicket;
    } catch (err) {
      return err;
    }
  },
  updateTicketStatus: async (ticket) => {
    try {
      const updated = await Ticket.findOneAndUpdate({name: ticket.name}, {status: ticket.status}, {
        new: true
      })
      return updated;
    } catch (err) {
      return err;
    }
  }

  // write rest of controller functions
}

export default Controller;