import mongoose from 'mongoose';

const responseSchema = mongoose.Schema({
  user_email: String,
  response: String
});

const Response = mongoose.model('Response', responseSchema);

export default Response;