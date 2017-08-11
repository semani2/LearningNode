console.log("Starting notes.js");

var addNote = (title, body) => {
  console.log(`Adding note ${title}, ${body}`);
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
