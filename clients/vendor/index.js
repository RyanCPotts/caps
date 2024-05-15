'use strict';

const Chance = require('chance')
const events = require('../../eventPool.js');
const { deliveredPackage } = require('./handler.js')

events.on('delivered', deliveredPackage)


const chance = new Chance();

function pickUpPackage(){
  const payload = {
    storeName: 'Stuff Outlet',
    orderId: chance.guid()
  }
  console.log('package ready for pickup');
  events.emit('readyForPickup', payload);

}

// module.exports = { pickUpPackage }

setInterval(() =>{
  pickUpPackage();
}, 1000)