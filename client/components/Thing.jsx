import React from 'react';

export default class Thing extends React.Component {
  render () {
    return (
      <div>
        <img src={this.props.image} />
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
