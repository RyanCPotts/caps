'use strict';

function pickupOrder(payload) {
  console.log('driver pickup:', payload);
  events.emit('delivered', payload);
}

module.exports = { deliveredPackage }