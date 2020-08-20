const yargs = require('yargs');
const { addNote, listNotes, removeNote } = require('./notes');

// console.log(yargs.argv);
const command = process.argv[2];


// if (command == 'add') {
//   console.log('adding a note');
//   addNote(yargs.argv.note);
// } else if (command == 'remove') {
//   console.log('removing a note ');
// } else if (command == 'list') {
//   console.log('listing all notes');
//   listNotes();
// } else if (command == 'remove') {
//   console.log('removing note');
//   removeNote(yargs.argv.note);
// } else {
//   console.log('command not recognized');
// }
if (command === "add") {
    console.log("adding a note");
    addNote(yargs.argv.note);
  } else if (command === "list") {
    listNotes();
  } else if (command === "remove") {
    removeNote(yargs.argv.note);
  } else {
    console.log("Command not found");
  }