import React from 'react';
import TagList from './tag-list';
import Radium from 'radium';

const styles = {
  container: {
    background: '#fefefe',
    borderBottom: '1px solid rgba(0,0,0,0.2)',
    borderLeft: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '0.2rem',
    borderRight: '1px solid rgba(0,0,0,0.08)',
    borderTop: '1px solid rgba(0,0,0,0.15)',
    boxShadow: 'rgba(0,0,0,0.0470588) 0px 2px 3px 0px',
    overflow: 'hidden'
  },
  content: {
    container: {
      padding: '1rem'
    },
    title: {
      color: '#656D77',
      fontSize: '1rem',
      fontWeight: 'normal',
      margin: 0
    },
    image: {
      display: 'block'
    },
    tagsList: {
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid #E9EBEF'
    }
  }
};

@Radium
export default class ThingListItem extends React.Component {
  renderTags (tags) {
    if (Array.isArray(tags) && tags.length) {
      return (
        <div style={ styles.content.tagsList }>
          <TagList tags={ tags } />
        </div>
      );
    }
    return '';
  }

  render () {
    return (
      <div style={ styles.container }>
        <img style={ styles.content.image } src={ this.props.image } />
        <div style={ styles.content.container }>
          <h2 style={ styles.content.title }>{ this.props.name }</h2>
          { this.renderTags(this.props.tags) }
        </div>
      </div>
    );
  }
}
