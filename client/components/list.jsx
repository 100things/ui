import React from 'react';
import Radium from 'radium';
import Thing from './thing-list-item';

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  thing: {
    flex: 1,
    padding: '1%',
    minWidth: '100%',
    '@media (min-width: 992px)': {
      minWidth: '33.333%'
    },
    '@media (min-width: 1200px)': {
      minWidth: '25%'
    }
  }
};

@Radium
export default class List extends React.Component {
  constructor (props) {
    super(props);
    this.store = props.flux.stores.ThingsStore;
    this.store.fetch();
  }

  componentDidMount () {
    this.store.listen(this._onChange);
  }

  componentWillUnmount () {
    this.store.unlisten(this._onChange);
  }

  _onChange = (state) => {
    this.setState(state);
  }

  render () {
    return (
      <div style={ styles.list }>
        { this.props.flux.stores.ThingsStore.getState().things.map((thing, i) =>
          <div
            key={ 'thing-' + thing.id }
            style={ styles.thing }>
            <Thing
              index={ i }
              { ...thing }
              />
          </div>
        ) }
      </div>
    );
  }
}
