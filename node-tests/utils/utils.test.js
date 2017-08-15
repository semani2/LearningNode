const utils = require('./utils');

const expect = require('expect');

it('should add two numbers', () => {
  var result = utils.add(11,33);

  expect(result).toBe(44);
});

it('should square the number', () => {
  var result = utils.square(-5);
  expect(result).toBe(25);
});
