console.log("Starting app.js");

// Fetching the File System module
const fs = require('fs');
const _ = require('lodash');

//Local modules
const notes = require('./notes.js');

var command = process.argv[2];
console.log(`Command: ${command}`);

if(command === 'add') {
  console.log('Adding new note');
}
else if(command === 'list') {
  console.log('Listing all notes');
}
else if(command === 'read') {
  console.log('Here\' your note');
}
else if(command === 'remove') {
  console.log('Removing note');
}
else {
  console.log('Command not recognized');
}
