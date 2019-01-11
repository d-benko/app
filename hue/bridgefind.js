let huejay = require('huejay');
console.log(huejay)
huejay.discover()
console.log(huejay)
  .then(bridges => {
    for (let bridge of bridges) {
      console.log(`Id: ${bridge.id}, IP: ${bridge.ip}`);
      console.log(bridge,bridges)
    }
  })
  .catch(error => {
    console.log(`An error occurred: ${error.message}`);
  });
