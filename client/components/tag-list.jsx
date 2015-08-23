import React from 'react';
import Tag from './tag';
import Radium from 'radium';

@Radium
export default class ThingListItem extends React.Component {
  render () {
    return (
        <div>
          { this.props.tags.map((tag, i) =>
            <Tag key={ `tag-${i}` }>{tag}</Tag>
          ) }
        </div>
    );
  }
}
