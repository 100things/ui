import React from 'react/addons';
import Notes from './notes';

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [{
                task: 'Learn webpack',
            }, {
                task: 'Learn react'
            },{
                task: 'Do laundry'
            }]
        };
    }

    render() {
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

    itemEdited(i, task) {
        var notes = this.state.notes;

        if (task) {
            notes[i].task = task;
        } else {
            notes = notes.slice(0, i).concat(notes.slice(i + 1));
        }

        this.setState({
            notes: notes
        });
    }

    itemRemove(i) {
        var notes = this.state.notes;
        notes = notes.slice(0, i).concat(notes.slice(i + 1));

        this.setState({
            notes: notes
        });
    }

    addItem() {
        this.setState({
            notes: this.state.notes.concat([{
                task: 'new task'
            }])
        });
    }
}
