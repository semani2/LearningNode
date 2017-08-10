console.log("Starting app.js");

// Fetching the File System module
const fs = require('fs');
// Fetching the Operating System module
const os = require('os');

const notes = require('./notes.js');

var user = os.userInfo();
// console.log(user);
//console.log(`You are ${notes.age} yrs old.`);

fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age}.`, function(err) {
  if(err) {
    console.log('Unable to write to file');
  }
});
