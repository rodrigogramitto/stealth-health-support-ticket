import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  status: String,
  description: String
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;