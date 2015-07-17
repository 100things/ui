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
                    onEdit={(i, task) => this.itemEdited(i, task)} />
            </div>
        );
    }

    itemEdited(i, task) {
        var notes = this.state.notes;

        notes[i].task = task;

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
