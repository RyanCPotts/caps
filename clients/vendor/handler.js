'use strict';

function deliveredPackage(payload){
  console.log('thanks for delivering', payload.orderId)
}

module.exports = { deliveredPackage }