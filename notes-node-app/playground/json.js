// var obj =  {
//   name: "Sai"
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Sai Prajnan", "age": 25}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);
// console.log(`Name: ${person.name}, Age: ${person.age}`)

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
