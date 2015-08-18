import React from 'react';

export default class Thing extends React.Component {

  inputChange (name, formatter, event) {
    var value;
    if (typeof formatter === 'function') {
      value = event.target.value;
      value = formatter(value);
    } else {
      event = formatter;
      value = event.target.value;
    }

    this.props.save({
      ...this.props.thing,
      [name]: value
    });
  }

  render () {
    const thing = this.props.thing;
    return (
      <div>
        <label>Name:
          <input
            type='text'
            onChange={ this.inputChange.bind(this, 'name') }
            value={ thing.name } />
        </label>
        <label>Tags:
          <input
            type='text'
            onChange={ this.inputChange.bind(this, 'tags', (val) => val.split(',') ) }
            value={ Array.isArray(thing.tags) ? thing.tags.join(',') : '' } />
        </label>
        <img src={ thing.image } />
      </div>
    );
  }
}
