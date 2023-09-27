import express from 'express';
import Controller from '../../db/controller/controller.js';

const Router = express.Router({ megerParams: true });

// post ticket route
Router.post('/ticket', (req, res) => {
  Controller.saveTicket(req.body)
    .then((ticket) => {
      res.send(ticket)
    })
    .catch((err) => {
      res.send(err.data)
    })
});

// update ticket route
Router.put('/ticket', (req, res) => {
  const ticket = req.body;
  Controller.updateTicketStatus({name: ticket.name, status: ticket.status})
    .then((updated) => {
      res.send(updated)
    })
    .catch((err) => {
      res.send(err.data);
    })
});

// get all tickets route
Router.get('/tickets', (req, res) => {
  Controller.getTickets()
    .then((tickets) => {
      res.send(tickets)
    })
    .catch((err) => {
      res.send(err.data)
    })
});

// get one ticket route
Router.get('/ticket', (req, res) => {
  Controller.getOneTicket(req.body)
    .then((ticket) => {
      res.send(ticket);
    })
    .catch((err) => {
      res.send(err.data)
    })
});

// post response route
Router.post('/response', (req, res) => {
  console.log(req.body),
  Controller.saveResponse(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err.data)
    })
});

export default Router;