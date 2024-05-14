// 'use strict';

// const events = require('./eventPool.js');


// const vendor = require('./vendor.js');
// const driver = require('./driver.js');

// events.on('pickupReady', handlePickup);
// function handlePickup( pickupObject ) {
//   console.log('event pool success');
//   events.emit('pickup',  pickupObject);
// }

'use strict';

const events = require('./eventPool.js');
const vendor = require('./vendor/index.js');
const driver = require('./driver/index.js');
events.on('readyForPickup', (payload) => {
  console.log('hub says: pickup event received');
  events.emit('pickup', payload);
});