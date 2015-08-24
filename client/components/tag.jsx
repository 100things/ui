import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    border: '1px solid #f0f0f0',
    borderRadius: '0.5em',
    color: '#c0c0c0',
    display: 'inline-block',
    fontSize: '.8rem',
    lineHeight: 1,
    marginRight: '0.5em',
    padding: '0.25em 0.4em',
    whiteSpace: 'no-wrap',
    ':hover': {
      backgroundColor: '#1891FA',
      borderColor: '#1891FA',
      color: '#fff',
      cursor: 'pointer'
    }
  },
  options: {
    borderLeft: '1px solid #fff',
    display: 'inline-block',
    marginLeft: '0.5em',
    paddingLeft: '0.5em'
  }
};

@Radium
export default class Tag extends React.Component {
  constructor (props) {
    super(props);
  }

  edit () {
  }

  render () {
    return (
      <span key='tag' style={ styles.base }>
        { this.props.children }
        { Radium.getState(this.state, 'tag', ':hover') ? (
          <span style={ styles.options }>
            <i
              onClick={ this.edit.bind(this) }
              className='fa fa-pencil'
            ></i> <i className="fa fa-times"></i>
          </span>
        ) : null }
      </span>
    );
  }
}
