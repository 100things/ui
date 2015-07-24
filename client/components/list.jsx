import React from 'react';
import Radium from 'radium';
import Thing from './thing';

const styles = {
};

@Radium
export default class List extends React.Component {
  render () {
    return (
      <div>
        <ul style={styles.notes}>{this.props.things.map((thing, i) =>
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
