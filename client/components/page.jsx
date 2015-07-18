import React from 'react/addons';
import Notes from './notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.storeChanged = this.storeChanged.bind(this);
        this.state = NoteStore.getState();
    }

    componentDidMount() {
        NoteStore.listen(this.storeChanged);
    }

    componentWillUnmount() {
        NoteStore.unlisten(this.storeChanged);
    }

    storeChanged(state) {
        this.setState(state);
    }

    render() {
        var notes = this.state.notes;

        return (
            <div>
                <button onClick={() => this.addItem()}>+</button>
                <Notes
                    items={this.state.notes}
                    onEdit={(i, task) => this.itemEdited(i, task)}
                    onRemove={(i) => this.itemRemove(i)} />
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
