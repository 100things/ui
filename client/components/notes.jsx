import React from 'react';
import Editable from './Editable';
import Radium from 'radium';

const styles = {
  notes: {
    margin: '0.5em',
    paddingLeft: '0',
    listStyle: 'none'
  },
  note: {
    marginBottom: '0.25em',
    padding: '0.5',
    border: '1px solid #ddd',
    backgroundColor: '#fdfdfd'
  }
};

@Radium
export default class Notes extends React.Component {
  render () {
    var notes = this.props.items;

    return (
      <ul className='notes' style={styles.notes}>{notes.map((note, i) =>
        <li className='note' style={styles.note} key={'note' + i}>
          <Editable
            value={note.task}
            onEdit={this.props.onEdit.bind(null, i)} />
        </li>
      )}</ul>
    );
  }
}
