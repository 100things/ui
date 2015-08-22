import React from 'react';
import Tag from './tag';

export default class ThingListItem extends React.Component {
  render () {
    return (
      <div>
        <h4>{ this.props.name }</h4>
        <img src={ this.props.image } />
        <div>
        { this.props.tags.map((tag, i) =>
          <Tag key={ `tag-${i}` }>{tag}</Tag>
        ) }
        </div>
      </div>
    );
  }
}
