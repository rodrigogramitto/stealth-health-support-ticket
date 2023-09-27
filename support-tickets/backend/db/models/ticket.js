import mongoose from 'mongoose';
import db from '../index.js';

const ticketSchema = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  status: String,
  description: String
});

const Ticket = mongoose.model('ticket', ticketSchema);

export default Ticket;