import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    borderRadius: '0.5em',
    fontSize: '.8rem',
    padding: '0.25em 0.4em',
    display: 'inline-block',
    color: '#c0c0c0',
    border: '1px solid #f0f0f0',
    whiteSpace: 'no-wrap',
    marginRight: '0.5em',
    lineHeight: 1
  }
};

@Radium
export default class Tag extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <span style={ styles.base }>
        { this.props.children }
      </span>
    );
  }
}
