import React from 'react/addons';
import AltContainer from 'alt/AltContainer';
import Notes from './notes';
import NoteActions from '../actions/Notes';
import NoteStore from '../stores/Notes';
import storage from '../api/local';
import persist from '../decorators/persist';

const noteStorageName = 'notes';

@persist(storage, noteStorageName, () => NoteStore.getState())
export default class Page extends React.Component {
    constructor(props) {
        super(props);

        NoteActions.init(storage.get(noteStorageName));
    }

    render() {
        var notes = this.props.notes;

        return (
            <div>
                <button onClick={() => this.addItem()}>+</button>
                <AltContainer
                    stores={[NoteStore]}
                    inject={ {
                        items: () => NoteStore.getState().notes || []
                    }}>
                    <Notes
                        onEdit={(i, task) => this.itemEdited(i, task)}
                        onRemove={(i) => this.itemRemove(i)} />
                </AltContainer>
            </div>
        );
    }

    itemEdited(id, task) {
        if (task) {
            NoteActions.update({id, task});
        } else {
            NoteActions.remove(id);
        }
    }

    itemRemove(id) {
        NoteActions.remove(id);
    }

    addItem() {
        NoteActions.create('New Task');
    }
}
