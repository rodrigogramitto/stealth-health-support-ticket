import express from 'express';
import Controller from '../db/controller/controller.js';

const Router = express.Router({ megerParams: true });

const testTicket = {
  name: 'Rodrigo',
  email: 'rodrigo@rodrigo.com',
  summary: 'need ticket to save to db',
  status: 'new',
  description: 'trying to get my ticketinos to save'
}

// post ticket route
Router.post('/ticket', (req, res) => {
  Controller.saveTicket(testTicket)
    .then((ticket) => {
      res.send(ticket)
    })
    .catch((err) => {
      res.send(err.data)
    })
});

// update ticket route
Router.put('/ticket', (req, res) => {
  res.send('Update ticket endpoint');
});

// get all tickets route
Router.get('/tickets', (req, res) => {
  res.send('Get all tickets endpoint');
});

// get one ticket route
Router.get('/ticket', (req, res) => {
  res.send('Get ONE Ticket endpoint');
});

// post response route
Router.post('/response', (req, res) => {
  res.send('Post response endpoint')
});

export default Router;