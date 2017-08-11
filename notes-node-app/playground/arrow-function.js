var square = x => x * x;

console.log(square(10));


var user = {
  name: 'Sai',
  sayHi : () => {
    console.log(arguments);
    console.log('HI');
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1,2,3);
