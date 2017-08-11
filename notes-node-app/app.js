const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//Local modules
const notes = require('./notes.js');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
            .command('add', 'Add a new note', {
                title,
                body
            })
            .command('list', 'Lists all notes')
            .command('read', 'Read a note', {
              title
            })
            .command('remove', 'Remove a note', {
              title
            })
            .help()
            .argv;
var command = process.argv[2];

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(!_.isUndefined(note)) { // Can also check if(note)
    console.log('Note created');
    notes.logNote(note);
  }
  else {
    console.log('There was an error adding the note ' + argv.title);
  }
}
else if(command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read') {
  var note = notes.getNote(argv.title);
  if(note) {
    console.log('Note');
    notes.logNote(note);
  }
  else {
    console.log('Note not found.')
  }
}
else if(command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed successfully' : 'Note not found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}
