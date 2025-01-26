'use strict';

require('dotenv').config();
const HUB_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';


const io = require('socket.io-client');
const socket = io.connect(HUB_URL);

socket.on('pickup', (payload) => {
  console.log('Picking up order:', payload);
  socket.emit('in-transit', payload);

  setTimeout(() => {
    console.log('Order delivered', payload);
    socket.emit('delivered', payload);
  }, 5000);
});
