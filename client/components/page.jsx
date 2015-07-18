import React from 'react/addons';
import AltContainer from 'alt/AltContainer';
import alt from '../alt';

import Notes from './notes';
import NoteActions from '../actions/Notes';
import NoteStore from '../stores/Notes';
import Lanes from './Lanes';
import LaneActions from './actions/Lanes';
import LaneStore from './stores/Lanes';
import persist from '../decorators/persist';
import {storage, storageName, getInitialData} from '../api/local';


@persist(storage, storageName, () => JSON.parse(alt.takeSnapShot()))
export default class Page extends React.Component {
    constructor(props) {
        super(props);

        LaneActions.init(getInitialData('LaneStore'));
    }

    render() {
        var notes = this.props.notes;

        return (
            <div>
                <button onClick={() => this.addLane()}>+</button>
                <AltContainer
                    stores={[LaneStore]}
                    inject={ {
                        items: () => LaneStore.getState().lanes || []
                    }}>
                    <Lanes />
                </AltContainer>
            </div>
        );
    }

    addLane() {
        LaneActions.create('New Lane');
    }
}
