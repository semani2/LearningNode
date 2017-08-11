console.log("Starting app.js");

// Fetching the File System module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//Local modules
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(!_.isUndefined(note)) { // Can also check if(note)
    console.log('Note created');
    console.log('--------------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }
  else {
    console.log('There was an error adding the note ' + argv.title);
  }
}
else if(command === 'list') {
  notes.getAll();
}
else if(command === 'read') {
  notes.getNote(argv.title);
}
else if(command === 'remove') {
  notes.removeNote(argv.title);
}
else {
  console.log('Command not recognized');
}
