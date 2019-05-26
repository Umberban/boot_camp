import './sass/main.scss';
import notes from "./notes.json";
import Controller from "./js/controller";
import View from "./js/view";
import Notes from "./js/model";

console.log(notes.initialNotes);

const view = new View();
const myNotes = new Notes(notes.initialNotes);
const contr =  new Controller(view,myNotes);

view.renderNoteList(view.refs.noteList,myNotes.notes);
