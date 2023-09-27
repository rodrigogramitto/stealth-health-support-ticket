import mongoose from 'mongoose';
import db from '../index.js';

const responseSchema = mongoose.Schema({
  user_email: String,
  response: String
});

const Response = mongoose.model('response', responseSchema);

export default Response;