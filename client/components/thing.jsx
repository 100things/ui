import React from 'react';

export default class Thing extends React.Component {

  handleChange (name, event) {
    this.props.save({
      ...this.props.thing,
      [name]: event.target.value
    });
  }

  render () {
    return (
      <div>
        <label>Name:
          <input
            type='text'
            onChange={ this.handleChange.bind(this, 'name') }
            value={ this.props.thing.name } />
        </label>
        <img src={ this.props.thing.image } />
      </div>
    );
  }
}
