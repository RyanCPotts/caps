'use strict';

// const events = require('../event-pool.js');
const { pickUpPackage } = require('./handler')

setInterval(() =>{
  pickUpPackage();
}, 1000)