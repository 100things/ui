import React from 'react';
import Radium from 'radium';

const styles = {
  background: 'red',
  padding: '10px'
};

@Radium
export default class Button extends React.Component {
  render () {
    var {children, ...props} = this.props;

    return (
      <div style={styles} {...props}>{this.props.children}</div>
    );
  }
}
