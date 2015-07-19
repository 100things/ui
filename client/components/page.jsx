import React from 'react/addons';
import AltContainer from 'alt/AltContainer';
import alt from '../alt';

import List from './List';
import ThingActions from '../actions/Things';
import ThingStore from '../stores/Things';
import persist from '../decorators/persist';
import {storage, storageName, getInitialData} from '../api/local';


@persist(storage, storageName, () => JSON.parse(alt.takeSnapShot()))
export default class Page extends React.Component {
  constructor (props) {
    super(props);

    ThingActions.init(getInitialData('ThingsStore'));
  }
  addLane () {
    ThingActions.create('New Things');
  }

  render () {
    return (
      <div>
        <AltContainer
          inject={{
            things: () => ThingStore.getState().things || []
          }}
          stores={[ThingStore]}>
          <List />
        </AltContainer>
      </div>
    );
  }
}
