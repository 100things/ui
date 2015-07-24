import React from 'react';
import Radium from 'radium';
import Thing from './thing';
import Actions from '../actions/Things';
import Store from '../stores/Things';
import alt from '../Alt';

class ListFlux extends alt {
  constructor (config = {}) {
    super(config);
    this.addActions('ThingsActions', Actions);
    this.addStore('ThingsStore', Store);
  }
}

const styles = {
};

@Radium
export default class List extends React.Component {
  constructor (props) {
    super(props);

    this.alt = new ListFlux();

    this.state = {
      things: []
    };
  }

  componentDidMount () {
    this.alt.getStore('ThingsStore').listen(this.onChange.bind(this));
  }

  componentWillUnmount () {
    this.alt.getStore('ThingsStore').unlisten(this.onChange.bind(this));
  }

  onChange () {
    this.setState(this.alt.getStore('ThingsStore').getState());
    this.forceUpdate();
  }

  render () {
    var things = this.state.things;

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
