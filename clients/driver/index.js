'use strict';

const events = require('../../eventPool.js');
events.on('pickup', pickupOrder);
function pickupOrder(payload) {
  console.log('driver pickup:', payload);
  events.emit('delivered', payload);
}