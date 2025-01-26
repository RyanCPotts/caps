'use strict';

const Chance = require('chance');
const lorem = new Chance();

require('dotenv').config();
const HUB_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

const io = require('socket.io-client');
const socket = io.connect(HUB_URL);

function simulateOrders() {
  setInterval(() => {
    const order = {
      store: lorem.company(),
      orderID: lorem.guid(),
      customer: lorem.name(),
      address: lorem.address(),
      value: lorem.dollar(),
    };

    console.log('Submitting order for pickup:', order);
    socket.emit('ready-for-pickup', order);
  }, 15000);
}

socket.on('pickup', (payload) => {
  console.log(`${payload.customer}, your order has been submitted.`);
});

socket.on('in-transit', (payload) => {
  console.log(`${payload.customer}, your order has shipped and is on its way!`);
});

socket.on('in-transit', (payload) => {
  console.log(`${payload.customer}, your order has been delivered.`);
});

simulateOrders();