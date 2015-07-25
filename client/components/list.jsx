import React from 'react';
import Radium from 'radium';
import Thing from './thing';
import AltIso from 'alt/utils/AltIso';

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  thing: {
    flex: 1,
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
class List extends React.Component {

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

export default AltIso.define(props => {
  return Promise.all([
    props.flux.stores.ThingsStore.fetch()
    ]);
  }, List);
