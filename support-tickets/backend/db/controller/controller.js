import Ticket from '../models/ticket.js';
import Response from '../models/response.js';

const Controller = {
  saveTicket: async (ticket) => {
    try {
      const newTicket = await Ticket.create(ticket);
      return newTicket;
    } catch (err) {
      return err;
    }
  },

  findTicket: async (user) => {
    try {
      const ticket = Ticket.findOne({ email });
      return ticket;
    } catch (err) {
      return err;
    }
  },

  findAllTicket: async () => {
    try {
      const tickets = Ticket.find();
      return tickets;
    } catch (err) {
      return err;
    }
  },

  // write code to update ticket status
  updateStatus: async (ticket) => {
    return 'Fix me';
  }

  // write summary functions as necesary
};

export default Controller;

