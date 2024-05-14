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

events.on('test', () => {
    console.log('Event received in hub.js');
});