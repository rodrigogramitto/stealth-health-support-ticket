import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
// import Controller from '../db/controller.js';
import Router from './routes/Router.js';

const app = express();
const PORT = 3000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//Routes
app.use(Router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })
