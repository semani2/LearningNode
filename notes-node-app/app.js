console.log("Starting app.js");

// Fetching the File System module
const fs = require('fs');
// Fetching the Operating System module
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Sai'));

var filteredArray = _.uniq(['Sai',1,'Sai',1,2,3,4]);
console.log(filteredArray);
//var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age}.`, function(err) {
//   if(err) {
//     console.log('Unable to write to file');
//   }
// });
