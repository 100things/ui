import AltContainer from 'alt/AltContainer';
import React from 'react';

import alt from '../alt';
import {getInitialData} from '../api/local';
import Notes from './Notes';
import LaneActions from '../actions/Lanes';
import createNoteActions from '../actions/Notes';
import NoteStore from '../stores/Notes';
import Editable from './Editable';
import Radium from 'radium';

const styles = {
  lane: {
      margin: '1em',
      border: '1px solid #ccc',
      borderRadius: '0.5em',
      minWidth: '10em',
      display: 'inline-block',
      verticalAlign: 'top',
      backgroundColor: '#efefef'
  },
  laneHeader: {
    padding: '1em',
    borderTopLeftRadius: '0.5em',
    borderTopRightRadius: '0.5em',
    overflow: 'auto',
    color: '#efefef',
    backgroundColor: '#333'
  },
  laneName: {
    float: 'left'
  },
  laneAddNote: {
    float: 'right'
  }

};

@Radium
export default class Lane extends React.Component {
  constructor (props) {
    super(props);
    this.actions = createNoteActions(alt);

    const storeName = 'NoteStore-' + this.props.i;
    this.store = alt.createStore(NoteStore, storeName, this.actions);
    this.actions.init(getInitialData(storeName));
  }

  addNote () {
    this.actions.create('New Note');
  }

  edited (actions, field, id, value) {
    if (value) {
      actions.update({id, [field]: value});
    } else {
      actions.remove(id);
    }
  }

  render () {
    const {i, name, ...props} = this.props;

    return (
      <div {...props} style={styles.lane}>
        <div className="lane-header" style={styles.laneHeader}>
          <Editable className="lane-name" style={styles.laneName} value={name}
            onEdit={this.edited.bind(null, LaneActions, 'name', this.props.i)} />
          <div className="lane-add-note" style={styles.laneAddNote}>
            <button onClick={() => this.addNote()}>+</button>
          </div>
        </div>
        <AltContainer
          stores={[this.store]}
          inject={{
            items: () => this.store.getState().notes || []
          }}>
          <Notes onEdit={this.edited.bind(null, this.actions, 'task')} />
        </AltContainer>
      </div>
    );
  }
}
