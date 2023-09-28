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
      const updated = await Ticket.findOneAndUpdate({subject: ticket.subject}, {status: ticket.status}, {
        new: true
      })
      return updated;
    } catch (err) {
      return err;
    }
  },

  getTickets: async () => {
    try {
      const tickets = await Ticket.find()
      return tickets;
    } catch (err) {
      return err;
    }
  },

  getOneTicket: async (ticket) => {
    try {
      const foundTicket = await Ticket.findOne({subject: ticket.subject})
      return foundTicket;
    } catch (err) {
      return err
    }
  },

  saveResponse: async (response) => {
    try {
      const newResponse = await Response.create({user_email: response.user_email, response_body: response.response_body})
      return newResponse;
    } catch (err) {
      return err
    }
  }
}

export default Controller;