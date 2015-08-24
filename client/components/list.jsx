import React from 'react';
import MasonryFactory from 'react-masonry-component';
import Thing from './thing-list-item';
var Masonry = MasonryFactory(React);

const masonryOptions = {
  transitionDuration: 0
};

export default class List extends React.Component {
  constructor (props) {
    super(props);
    props.actions.readAll();
  }

  render () {
    return (
      <Masonry options={ masonryOptions }>
        { this.props.things.map((thing, i) =>
          <Thing
            key={ 'thing-' + thing.id }
            index={ i }
            { ...thing }
          />
        ) }
      </Masonry>
    );
  }
}
