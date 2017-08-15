const utils = require('./utils');

it('should add two numbers', () => {
  var result = utils.add(11,33);
  if(result !== 44) {
    throw new Error(`Expected 44 but got ${result}`);
  }
});

it('should square the number', () => {
  var result = utils.square(-5);
  if(result != 25) {
    throw new Error(`Expected 25 but got ${result}`);
  }
});
