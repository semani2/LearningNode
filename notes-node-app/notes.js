console.log("Starting notes.js");

const fs = require('fs');

var addNote = (title, body) => {
  //console.log(`Adding note ${title}, ${body}`);
  var notes = [];
  var note = {
    title, // Shorthand in ES6
    body
  };
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title); // ES6 shorthand for arrow functions
  if(duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log(`Getting note: ${title}`);
};

var removeNote = (title) => {
  console.log(`Removing note with title: ${title}`);
};

module.exports = {
  addNote, // shorthand by es6 for addNote: addNote
  getAll,
  getNote,
  removeNote
};
