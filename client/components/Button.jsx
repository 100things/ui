import React from 'react';
import Radium from 'radium';

@Radium
export default class Button extends React.Component {
  render () {
    return (
      <button>{this.props.children}</button>
    );
  }
}
