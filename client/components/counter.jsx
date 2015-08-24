import React from 'react';

export default class Counter extends React.Component {
  render () {
    return (
      <span>
        { this.props.things.length }
      </span>
    );
  }
}
