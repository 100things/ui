import React from 'react';
import Radium from 'radium';
import Thing from './thing';

const styles = {
};

@Radium
export default class List extends React.Component {
  addThing () {

  }
  
  render () {
    var things = this.props.things;

    return (
      <div>
        <button onClick={() => this.addThing()}>Add Thing</button>
        <ul style={styles.notes}>{things.map((thing, i) =>
            <Thing
              index={i}
              thing={thing}
              />
          )}</ul>
        </div>
    );
  }
}
