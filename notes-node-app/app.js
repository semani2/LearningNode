console.log("Starting app");

// Fetching the File System module
const fs = require('fs');

fs.appendFile('greetings.txt', 'hello world!', function(err) {
  if(err) {
    console.log('Unable to write to file');
  }
});
