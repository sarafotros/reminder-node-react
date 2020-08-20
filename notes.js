const fs = require("fs");

const addNote = (myNotes) => {
  const allNotes = loadNotes();
  allNotes.push({ reminder: myNotes });
  saveNotes(allNotes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const saveNotes = (allNotes) => {
  const notesJson = JSON.stringify(allNotes);
  fs.writeFileSync("notes.json", notesJson);
};

const listNotes = () => {
  const allNotes = loadNotes();
  allNotes.map((note) => {
    console.log(note.reminder);
  });
};

const removeNote = (noteToDelete) => {
  const allNotes = loadNotes();
  const notesToKeep = allNotes.filter((note) => {
    return note.reminder !== noteToDelete;
  });
  saveNotes(notesToKeep);
};

module.exports = {
  addNote,
  listNotes,
  removeNote,
  loadNotes,
};
