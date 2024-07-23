'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const Queue = require('./queue.js');
const orders = new Queue();
const io = require('socket.io')(PORT);

io.on('connection', handleClientConnection);

function handleClientConnection(socket) {
  console.log('Connection established with', socket.id);

  socket.on('ready-for-pickup', (payload) => {
    console.log('New order is awaiting pickup:', payload);
    console.log('pickup is in queue');
    orders.enqueue(payload);
    io.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    console.log('Order has been picked up:', payload);
    io.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log('Order delivered:', payload);
    orders.dequeue();
    io.emit('delivered', payload);
  });
}