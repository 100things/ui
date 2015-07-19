
export default class NoteStore {
  constructor (actions) {
    this.bindActions(actions);

    this.notes = [];
  }

  init (data) {
    this.setState(data && Array.isArray(data.notes) ? data : { notes: [] });
  }

  create (task) {
    const notes = this.notes;

    this.setState({
      notes: notes.concat({task})
    });
  }

  update ({id, task}) {
    const notes = this.notes;

    notes[id].task = task;

    this.setState({notes});
  }

  remove (id) {
    const notes = this.notes;

    this.setState({
      notes: notes.slice(0, id).concat(notes.slice(id + 1))
    });
  }
}
