import mongoose from 'mongoose';
import 'dotenv/config';

const cloud_db = 'mongodb+srv://stealth:stealth123@cluster0.zse41nb.mongodb.net/?retryWrites=true&w=majority';

// eslint-disable-next-line no-undef
// mongoose.connect('mongodb://localhost:27017/tickets');
mongoose.connect(cloud_db);

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongo connection error');
});

db.once('open', () => {
  console.log('mongo connected succesfully');
});

export default db;