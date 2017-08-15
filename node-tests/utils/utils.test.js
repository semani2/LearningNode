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

it('shoud verify first and last name are set', () => {
  var user = {
    age: 25,
    location: "Raleigh"
  };
  user = utils.setName(user, 'Sai Emani');
  expect(user).toInclude({
    firstName: 'Sai',
    lastName: 'Emani'
  }).toBeA('object');
});

// Testing async functions with passing the done parameter
it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (result) => {
    expect(result).toBe(7).toBeA('number');
    done();
  })
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (result) => {
    expect(result).toBeA('number').toBe(25);
    done();
  });
});
