import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import Router from './router.js';

const app = express();
const PORT = 3000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use(Router);

try {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  }  )
} catch (err) {
  console.log('Error spinning up server', err)
}
