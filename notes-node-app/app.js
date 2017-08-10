console.log("Starting app");

// Fetching the File System module
const fs = require('fs');
// Fetching the Operating System module
const os = require('os');

var user = os.userInfo();
//console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
  if(err) {
    console.log('Unable to write to file');
  }
});
