import Alt from 'alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
    constructor() {
        this.bindActions(NoteActions);

        this.notes = [];
    }

    create(task) {
        const notes = this.notes;

        this.setState({
            notes: notes.concat({task})
        });
    }

    update({id, task}) {
        const notes = this.notes;

        notes[id].task = task;

        this.setState({notes});
    }

    remove(id) {
        const notes = this.notes;

        this.setState({
            notes: notes.slice(0, id).concat(notes.slice(id + 1))
        });
    }
}

export default Alt.createStore(NoteStore);
