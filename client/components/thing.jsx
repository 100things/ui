import React from 'react';

export default class Thing extends React.Component {

  onNameChange (event) {
    this.props.save({
      ...this.props.thing,
      name: event.target.value
    });
  }

  onTagsChange (event) {
    this.props.save({
      ...this.props.thing,
      tags: event.target.value.split(',')
    });
  }

  onImageChange (event) {
    var files = event.target.files;

    if (files && files.length > 0) {
      // Create file reader
      var reader = new FileReader();

      reader.onload = (readerEvent) => {
        // Convert to base 64
        this.props.save({
          ...this.props.thing,
          image: readerEvent.target.result
        });
      };
      reader.readAsDataURL(files[0]);
      
    } else {

      this.props.save({
        ...this.props.thing,
        name: null
      });
    }
  }

  render () {
    const thing = this.props.thing;
    return (
      <div>
        <label>Name:
          <input
            type='text'
            onChange={ this.onNameChange.bind(this) }
            value={ thing.name } />
        </label>
        <label>Tags:
          <input
            type='text'
            onChange={ this.onTagsChange.bind(this) }
            value={ Array.isArray(thing.tags) ? thing.tags.join(',') : '' }
            />
        </label>
        <input
          type='file'
          accept='image/*'
          onChange={ this.onImageChange.bind(this) }
          />
        <img src={ thing.image } />
      </div>
    );
  }
}
