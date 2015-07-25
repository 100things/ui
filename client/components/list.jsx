import React from 'react';
import Radium from 'radium';
import Thing from './thing';
import AltIso from 'alt/utils/AltIso';

const styles = {
};

@Radium
class List extends React.Component {

  render () {
    return (
      <div>
        <ul style={styles.notes}>{this.props.flux.stores.ThingsStore.getState().things.map((thing, i) =>
            <Thing
              index={i}
              key={'thing-' + thing.id}
              {...thing}
              />
          )}</ul>
        </div>
      );
  }
}

export default AltIso.define(props => {
  return Promise.all([
    props.flux.stores.ThingsStore.fetch()
  ]);
}, List);
