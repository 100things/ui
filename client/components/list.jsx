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
    minWidth: '50%',
    '@media (min-width: 992px)': {
      minWidth: '20%'
    },
    '@media (min-width: 1200px)': {
      minWidth: '10%'
    }
  }
};

@Radium
export default class List extends React.Component {
  constructor (props) {
    super(props);
    props.actions.readAll();
  }

  render () {
    return (
      <div style={ styles.list }>
        { this.props.things.map((thing, i) =>
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
