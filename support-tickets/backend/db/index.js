import mongoose from 'mongoose';
import 'dotenv/config';

const cloud_db = process.env.DB_CONNECTION_STRING;

// eslint-disable-next-line no-undef
mongoose.connect('mongodb://localhost:27017/tickets');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongo connection error');
});

db.once('open', () => {
  console.log('mongo connected succesfully');
});

export default db;