import React from 'react';
import Radium from 'radium';
import Thing from './thing';

const styles = {
};

@Radium
export default class List extends React.Component {
  render () {
    var things = this.props.things;

    return (
      <div>
        <ul style={styles.notes}>{things.map((thing, i) =>
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
