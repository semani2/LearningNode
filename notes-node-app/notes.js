const fs = require('fs');

//Helper function to fetch the notes
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

//Helper function to save the notes to disk
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// Method to add a note
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title, // Shorthand in ES6
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title); // ES6 shorthand for arrow functions
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  console.log(`Getting note: ${title}`);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  console.log(`Removing note with title: ${title}`);

  var notes = fetchNotes();
  var newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes);

  return notes.length !== newNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('--------------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote, // shorthand by es6 for addNote: addNote
  getAll,
  getNote,
  removeNote,
  logNote
};
