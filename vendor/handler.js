'use strict';

const Chance = require('chance')
const event = require('../eventPool.js');

const chance = new Chance();

function pickUpPackage(){
  const payload = {
    storeName: 'Temp Store Name',
    orderId: chance.guid()
  }
  console.log('package ready for pickup');
event.emit('pickup', payload);

}

module.exports = { pickUpPackage }