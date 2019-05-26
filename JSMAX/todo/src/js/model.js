export default class Model {
    constructor(notes = []){
        this._notes = notes;
        this._editMode = false;
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    static getPriorityName(priorityId) {
        return Notepad.PRIORITIES[priorityId].name;
      }

    get notes() {
        return this._notes;
      }
    
      set notes(notes) {
        return this._notes = notes;
      }

      toggleEditMode(){
        this._editMode = !this._editMode
      }
}