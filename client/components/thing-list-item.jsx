import React from 'react';
import Tag from './tag';
import Radium from 'radium';

const styles = {
  container: {
    base: {
      background: '#fefefe',
      boxShadow: 'rgba(0, 0, 0, 0.0470588) 0px 2px 3px 0px',
      borderRadius: '0.2em',
      borderLeft: '1px solid #f5f5f5',
      borderTop: '1px solid #f4f4f4',
      borderRight: '1px solid #fafafb',
      borderBottom: '1px solid #e8e8e8',
      overflow: 'hidden'
    }
  },
  content: {
    container: {
      base: {
        padding: '0 1rem'
      }
    }
  },
  title: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 'normal',
    background: '#1891FA',
    padding: '1rem',
    color: '#fff',
    textTransform: 'uppercase'
  },
  tagsList: {
    padding: '1rem 0'
  }
};

@Radium
export default class ThingListItem extends React.Component {
  renderTags (tags) {
    if (Array.isArray(tags) && tags.length) {
      return (
        <div style={ styles.tagsList }>
          { this.props.tags.map((tag, i) =>
            <Tag key={ `tag-${i}` }>{tag}</Tag>
          ) }
        </div>
      );
    }
    return '';
  }

  render () {
    return (
      <div style={ styles.container.base }>
        <h4 style={ styles.title }>{ this.props.name }</h4>
        <img src={ this.props.image } />
        <div style={ styles.content.container.base }>
          { this.renderTags(this.props.tags) }
        </div>
      </div>
    );
  }
}
