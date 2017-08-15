const utils = require('./utils');

const expect = require('expect');

it('should add two numbers', () => {
  var result = utils.add(11,33);

  expect(result).toBe(44).toBeA('number');
});

it('should square the number', () => {
  var result = utils.square(-5);
  expect(result).toBe(25).toBeA('number');
});

it('should expect some value', () => {
  //expect(12).toNotBe(11);
  //expect({name: 'Sai'}).toEqual({name: 'Sai'});
  //expect([2,3,4]).toInclude(3);
  expect({
    name: "sai",
    age: 25,
    location: "Raleigh"}).toInclude({
      age: 25
  });
});
