import React from 'react';
import Tag from './tag';
import Radium from 'radium';

const styles = {
  container: {
    base: {
      background: '#fefefe',
      border: '1px solid #f0f0f0',
      boxShadow: 'rgba(0, 0, 0, 0.0470588) 0px 2px 3px 0px',
      borderRadius: '0.2em',
      borderLeft: '1px solid #f5f5f5',
      borderTop: '1px solid #f4f4f4',
      borderRight: '1px solid #fafafb',
      borderBottom: '1px solid #e8e8e8'
    }
  },
  content: {
    container: {
      base: {
        padding: '1em'
      }
    }
  }
};

@Radium

export default class ThingListItem extends React.Component {
  render () {
    return (
      <div style={ styles.container.base }>
        <img src={ this.props.image } />
        <div style={ styles.content.container.base }>
          <h4>{ this.props.name }</h4>
          <div>
          { this.props.tags.map((tag, i) =>
            <Tag key={ `tag-${i}` }>{tag}</Tag>
          ) }
          </div>
        </div>
      </div>
    );
  }
}
