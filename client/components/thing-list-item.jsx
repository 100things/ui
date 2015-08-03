import React from 'react';


export default class Thing extends React.Component {
  render () {
    return (
      <div>
        <h4>{ this.props.name }</h4>
        <img src={ this.props.image } />
      </div>
    );
  }
}
