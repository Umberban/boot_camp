import { getTodos } from "./utils/api";
import { updateById } from "./utils/api";

export default class Model {
  constructor() {
    this._notes = [];
    this._editMode = false;
    this._editTodo = null;
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  static getPriorityName(priorityId) {
    return Notepad.PRIORITIES[priorityId].name;
  }

  get notes() {
    return this._notes;
  }

  set notes(notes) {
    return (this._notes = notes);
  }

  toggleEditMode(todo) {
    this._editMode = !this._editMode;
    if (this._editTodo === null) {
      this._editTodo = todo;
    } else {
      this._editTodo = null;
    }
  }

  getAllData() {
    return getTodos();
  }

  updateNote(data) {
    console.log({ ...this._editTodo, ...data });
    return updateById(this._editTodo.id, { ...this._editTodo, ...data });
  }
}
