import React from 'react';
import Tag from './tag';

export default class ThingListItem extends React.Component {
  hasTags (tags) {
    return Array.isArray(tags) && tags.length;
  }

  render () {
    return (
        <div>
          { this.hasTags(this.props.tags) ? this.props.tags.map((tag, i) => {
             return <Tag key={ `tag-${i}` }>{tag}</Tag>;
          }) : '' }
        </div>
    );
  }
}
